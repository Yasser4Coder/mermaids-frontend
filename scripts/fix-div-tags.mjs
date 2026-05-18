import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const bad = "mo" + "tion";
const good = "div";

const files = [
  "src/components/home/HeroRevealStack.jsx",
  "src/components/home/BrandWelcome.jsx",
  "src/components/home/MermaidCollection.jsx",
  "src/components/home/ServicesRevealStack.jsx",
];

for (const file of files) {
  const full = path.join(root, file);
  let text = fs.readFileSync(full, "utf8");
  text = text.replaceAll(`</${bad}>`, `</${good}>`);
  text = text.replaceAll(`<${bad}`, `<${good}`);
  fs.writeFileSync(full, text);
  console.log("fixed", file);
}
