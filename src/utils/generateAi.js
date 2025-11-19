import { Mistral } from "@mistralai/mistralai";
import dotenv from "dotenv";

dotenv.config();

const mistral = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

async function generateAi(categoryName) {
  const result = await mistral.chat.complete({
    model: "open-mistral-nemo",
    messages: [
      {
        role: "user",
        content: `
You are an expert HTML generator.

Task:
Fill the following DaisyUI table with creative, professional, and modern business names that match the given category.

Rules:
- Only modify the empty <td></td> cells by inserting business names.
- Each <tbody> section belongs to the preceding <thead> letter and must contain 3 unique names starting with that letter.
- Keep all <div>, <table>, <thead>, <tbody>, <tr>, <th>, and <td> tags exactly as they are.
- Do NOT remove, add, or rearrange any structure, tags, or classes.
- Output only the HTML (starting with <div> and ending with </div>).
- Do NOT include markdown, code fences, explanations, or comments.
- Ensure all names fit the given category and sound like real, modern brand names (e.g., Notion, Stripe, Canva, Figma).

Category: ${categoryName}

Now fill this exact HTML:
<div class="h-[85vh] md:h-[100vh] overflow-x-auto">
  <table class="table table-pin-rows m-auto w-full bg-base-200">
    <thead><tr><th>A</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>B</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>C</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>D</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>E</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>F</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>G</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>H</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>I</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>M</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>R</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>S</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>T</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>W</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>X</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead><tr><th>Z</th></tr></thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
  </table>
</div>
`,
      },
    ],
  });
  let content = result.choices[0].message.content;

  //  Remove any Markdown code fences (```html, ```js, or plain ```)
  content = content
    .replace(/```[\s\S]*?```/g, (match) =>
      match.replace(/```(html|javascript|js)?/gi, "").replace(/```/g, "")
    )
    .trim();

  // Also remove stray backticks if any slipped through
  content = content.replace(/`/g, "").trim();

  return content;
}

export default generateAi;
