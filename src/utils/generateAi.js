import { Mistral } from "@mistralai/mistralai";
import dotenv from "dotenv";

dotenv.config();

const mistral = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

async function generateAi(categoryName) {
  const result = await mistral.chat.complete({
    model: "mistral-small-latest",
    messages: [
      {
        role: "user",
        content: `
        I want you to generate and fill this table with creative business names sorted A–Z.
        Category: ${categoryName}.
        Make sure names fit the category, feel professional, and resemble modern brand naming styles.

        (Return ONLY this table in HTML format, exactly as given and do not include code fences, markdown, or any extra text.)
        
        <table class="table table-pin-rows m-auto w-full bg-base-200"> 
            <thead>
      <tr>
        <th>A</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>B</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>C</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>D</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>E</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>F</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>G</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>H</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>I</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>M</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>R</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>S</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>T</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>W</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>X</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
    </tbody>
    <thead>
      <tr>
        <th>Z</th>
      </tr>
    </thead>
    <tbody>
      <tr><td></td></tr>
      <tr><td></td></tr>
    </tbody>
        </table>
        `,
      },
    ],
  });
  let content = result.choices[0].message.content;

  // 🧹 Remove any Markdown code fences (```html, ```js, or plain ```)
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
