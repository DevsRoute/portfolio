/** JSON-LD safe to embed in a script tag. Escapes `<` so content cannot close the tag. */
export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
