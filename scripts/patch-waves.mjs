import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const tag = "div";
const file = path.join(fileURLToPath(new URL(".", import.meta.url)), "../src/components/home/MermaidCollection.jsx");
let t = fs.readFileSync(file, "utf8");

const waves = `
        <${tag} className="mermaid-collection__wave-stack">
          <${tag} className="mermaid-collection__wave mermaid-collection__wave--deep" />
          <${tag} className="mermaid-collection__wave mermaid-collection__wave--mid" />
          <${tag} className="mermaid-collection__wave mermaid-collection__wave--foam" />
        </${tag}>
        <${tag} className="mermaid-collection__sparkles" />`;

t = t.replace(
  new RegExp(`<${tag} className="mermaid-collection__glow" \\/>\\s*<\\/${tag}>`),
  `<${tag} className="mermaid-collection__glow" />${waves}\n      </${tag}>`
);

fs.writeFileSync(file, t);
console.log("wave-stack:", t.includes("wave-stack"));
