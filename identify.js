import Groq from "groq-sdk";
export const config = { api: { bodyParser: { sizeLimit: "10mb" } } };

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { image, mimeType, insectType } = req.body;
  if (!image) return res.status(400).json({ error: "No image provided" });
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const typeHint = insectType ? `Focus on identifying this as a ${insectType}.` : "";
  const prompt = `You are an expert entomologist. Analyze the image and identify the insect/bug. ${typeHint}
Respond ONLY in this JSON format:
{"found":true,"commonName":"Name","scientificName":"Scientific Name","order":"Order","family":"Family","confidence":95,"dangerLevel":"Harmless","description":"2-3 sentence description.","habitat":"Where it lives","diet":"What it eats","size":"Size range","funFact":"One interesting fact","region":"Geographic regions"}
dangerLevel options: "Harmless","Mildly Irritating","Can Bite/Sting","Venomous","Dangerous"
If no insect found: {"found":false,"message":"No insect detected. Please upload a clearer photo."}`;
  try {
    const response = await groq.chat.completions.create({
      model: "meta-llama/llama-4-scout-17b-16e-instruct",
      messages: [{ role: "user", content: [{ type: "image_url", image_url: { url: `data:${mimeType || "image/jpeg"};base64,${image}` } }, { type: "text", text: prompt }] }],
      temperature: 0.1, max_tokens: 900,
    });
    const text = response.choices[0]?.message?.content || "";
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return res.status(200).json({ found: false, message: "Could not analyze. Try a clearer photo." });
    return res.status(200).json(JSON.parse(match[0]));
  } catch (e) { console.error(e); return res.status(500).json({ error: "Analysis failed. Please try again." }); }
}
