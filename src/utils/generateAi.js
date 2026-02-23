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
        content: `You are an HTML-filling engine. You output only raw HTML. Nothing else.

TASK:
Fill every empty <td></td> in the HTML below with a fictional business name matching the category: ${categoryName}

STRICT RULES — follow every one exactly:

1. OUTPUT: Return only the HTML, starting with <div and ending with </div>. No markdown, no code fences, no backticks, no explanations, no comments. Absolutely nothing before or after the HTML.

2. STRUCTURE: Do NOT change, remove, add, or reorder any tags, attributes, classes, or whitespace outside of the <td> cells.

3. LETTER RULE: Each name must start with the exact letter shown in the <th> above its <tbody>. A name under <th>B</th> must start with B. No exceptions.

4. UNIQUENESS: Every single name across the entire table must be different. No name may appear more than once.

5. FICTIONAL ONLY: Names must NOT be existing brands, companies, apps, or trademarks. Do not use: Stripe, Notion, Figma, Canva, Google, Apple, or any real brand — not even as inspiration for slight variations.

6. STYLE: Names should sound like credible, modern startups — short (1-2 words), memorable, and relevant to the category. Think invented compound words, abstract nouns, or creative portmanteaus.

7. COUNT: Each <tbody> has exactly 3 <tr><td></td></tr> rows. Fill all 3. No more, no less.

Before generating, mentally list all 48 names (16 letters × 3) and verify:
- All start with the correct letter
- None are duplicates
- None are real brand names
Then output the filled HTML.

Category: ${categoryName}

HTML to fill:
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
      match.replace(/```(html|javascript|js)?/gi, "").replace(/```/g, ""),
    )
    .trim();

  // Also remove stray backticks if any slipped through
  content = content.replace(/`/g, "").trim();

  return content;
}

export default generateAi;
