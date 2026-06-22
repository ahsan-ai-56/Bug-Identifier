import { useState, useRef } from "react";

const DANGER_CLASS = { Harmless: "d-safe", "Mildly Irritating": "d-mild", "Can Bite/Sting": "d-sting", Venomous: "d-venom", Dangerous: "d-danger" };
const DANGER_EMOJI = { Harmless: "✅", "Mildly Irritating": "⚠️", "Can Bite/Sting": "🔶", Venomous: "☠️", Dangerous: "🚨" };

export default function UploadTool({ apiRoute = "/api/identify", accentColor = "#22c55e", dropLabel = "Drop an insect photo here", btnLabel = "🔍 Identify Now", resultTitle = "Identification Result" }) {
  const [image, setImage] = useState(null);
  const [b64, setB64] = useState(null);
  const [mime, setMime] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [drag, setDrag] = useState(false);
  const fileRef = useRef(null);
  const resultRef = useRef(null);

  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    setResult(null); setError(null); setMime(file.type);
    const r = new FileReader();
    r.onload = e => { setImage(e.target.result); setB64(e.target.result.split(",")[1]); };
    r.readAsDataURL(file);
  }

  async function identify() {
    if (!b64) return;
    setLoading(true); setError(null); setResult(null);
    try {
      const res = await fetch(apiRoute, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ image: b64, mimeType: mime }) });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch (e) { setError(e.message || "Analysis failed. Please try again."); }
    finally { setLoading(false); }
  }

  function reset(e) { e?.stopPropagation(); setImage(null); setB64(null); setResult(null); setError(null); }

  return (
    <>
      <div className="upload-card" style={{ "--ac": accentColor }}>
        <div
          className={`drop-zone${drag ? " drag" : ""}`}
          style={{ borderColor: drag ? accentColor : undefined }}
          onDragOver={e => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={e => { e.preventDefault(); setDrag(false); handleFile(e.dataTransfer.files[0]); }}
          onClick={() => !image && fileRef.current?.click()}
        >
          <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => handleFile(e.target.files[0])} />
          {image ? (
            <div style={{ width: "100%", textAlign: "center" }}>
              <img src={image} alt="Preview" className="preview-img" />
              <button onClick={reset} style={{ marginTop: "8px", background: "none", border: "none", color: accentColor, cursor: "pointer", fontSize: ".82rem", textDecoration: "underline" }}>Choose different photo</button>
            </div>
          ) : (
            <>
              <div className="drop-icon">📸</div>
              <p>{dropLabel}</p>
              <p>or <strong style={{ color: accentColor }}>click to browse</strong></p>
              <small>JPG, PNG, WEBP — max 10 MB</small>
            </>
          )}
        </div>
        <button className="btn btn-primary btn-full btn-lg" style={{ marginTop: "1rem", background: accentColor }} onClick={identify} disabled={!b64 || loading}>
          {loading ? <><div className="spinner" /> Analyzing...</> : btnLabel}
        </button>
      </div>

      {(result || error) && (
        <div className="result-wrap" ref={resultRef}>
          {error && <div className="error-box"><div style={{ fontSize: "2rem" }}>⚠️</div><p style={{ fontWeight: 600, marginTop: ".5rem" }}>{error}</p></div>}
          {result && !result.found && <div className="error-box"><p style={{ fontWeight: 600 }}>🔍 {result.message || "No match found. Try a clearer photo."}</p></div>}
          {result && result.found && (
            <div className="result-card">
              <div className="result-head">
                <div className="result-ico" style={{ background: `rgba(34,197,94,.15)` }}>🔬</div>
                <div style={{ flex: 1 }}>
                  <div className="result-name">{result.commonName}</div>
                  <div className="result-sci">{result.scientificName}</div>
                  <div className="conf-row">
                    <div className="conf-bar"><div className="conf-fill" style={{ width: `${result.confidence}%` }} /></div>
                    <span className="conf-txt">{result.confidence}% Match</span>
                  </div>
                  {result.dangerLevel && (
                    <div className={`d-badge ${DANGER_CLASS[result.dangerLevel] || "d-safe"}`}>
                      {DANGER_EMOJI[result.dangerLevel] || "✅"} {result.dangerLevel}
                    </div>
                  )}
                  {result.severity && <div className="d-badge d-mild" style={{ marginLeft: 6 }}>Severity: {result.severity}</div>}
                </div>
              </div>
              <div className="result-body">
                {result.description && <div className="r-block full"><div className="r-lbl">Description</div><div className="r-val">{result.description}</div></div>}
                {result.order && <div className="r-block"><div className="r-lbl">Order</div><div className="r-val">{result.order}</div></div>}
                {result.family && <div className="r-block"><div className="r-lbl">Family</div><div className="r-val">{result.family}</div></div>}
                {result.habitat && <div className="r-block"><div className="r-lbl">Habitat</div><div className="r-val">{result.habitat}</div></div>}
                {result.diet && <div className="r-block"><div className="r-lbl">Diet</div><div className="r-val">{result.diet}</div></div>}
                {result.size && <div className="r-block"><div className="r-lbl">Size</div><div className="r-val">{result.size}</div></div>}
                {result.region && <div className="r-block"><div className="r-lbl">Found In</div><div className="r-val">{result.region}</div></div>}
                {result.biteType && <div className="r-block"><div className="r-lbl">Bite / Sting Type</div><div className="r-val">{result.biteType}</div></div>}
                {result.immediateAction && <div className="r-block full"><div className="r-lbl">Immediate Action</div><div className="r-val">{result.immediateAction}</div></div>}
                {result.whenToSeekHelp && <div className="r-block full" style={{ background: "#fef2f2", borderColor: "#fecaca" }}><div className="r-lbl" style={{ color: "#dc2626" }}>⚠️ When to Seek Help</div><div className="r-val" style={{ color: "#7f1d1d" }}>{result.whenToSeekHelp}</div></div>}
                {result.funFact && <div className="fact-box"><span style={{ fontSize: "1.1rem" }}>💡</span><div><div className="r-lbl" style={{ color: "#92400e" }}>Fun Fact</div><div className="r-val">{result.funFact}</div></div></div>}
                <div className="r-block full" style={{ textAlign: "center", background: "transparent", border: "none" }}>
                  <button className="btn btn-outline" onClick={() => { reset(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>🔄 Identify Another</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
