import fs from "fs";
import path from "path";

const contactDir = path.join(process.cwd(), "content/contact");

export function getContactContent(locale: string) {
  const filePath = path.join(contactDir, `contact.${locale}.mdx`);
  return fs.readFileSync(filePath, "utf8");
}
