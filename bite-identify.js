import Groq from "groq-sdk";
export const config = { api: { bodyParser: { sizeLimit: "10mb" } } };
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { image, mimeType } = req.body;
  if (!image) return res.status(400).json({ error: "No image provided" });
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const prompt = `You are an expert dermatologist specializing in insect bites. Analyze this image.
Respond ONLY in JSON:
{"found":true,"biteType":"Mosquito Bite","likelyCause":"Mosquito (Culicidae)","severity":"Mild","dangerLevel":"Low","symptoms":["Itching","Red bump"],"appearance":"Description of how it looks","immediateAction":"What to do right now","whenToSeekHelp":"When to see a doctor","healingTime":"1-3 days","transmitsDiseases":false,"possibleDiseases":[],"prevention":"How to prevent"}
severity: "Mild","Moderate","Severe","Critical". dangerLevel: "Low","Medium","High","Critical"
If no bite visible: {"found":false,"message":"No bite detected. Please upload a clearer photo of the affected area."}
IMPORTANT: Educational only — always recommend professional medical advice.`;
  try {
    const response = await groq.chat.completions.create({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [{ role: "user", content: [{ type: "image_url", image_url: { url: `data:${mimeType || "image/jpeg"};base64,${image}` } }, { type: "text", text: prompt }] }],
      temperature: 0.1, max_tokens: 900,
    });
    const text = response.choices[0]?.message?.content || "";
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return res.status(200).json({ found: false, message: "Could not analyze. Try a clearer photo of the bite." });
    return res.status(200).json(JSON.parse(match[0]));
  } catch (e) { console.error(e); return res.status(500).json({ error: "Analysis failed. Please try again." }); }
}
