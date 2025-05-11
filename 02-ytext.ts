import * as Y from "yjs"

const doc = new Y.Doc()

const ytext = doc.getText("example")

ytext.insert(0, "Hello")
ytext.insert(5, " World")
ytext.format(0, 5, { bold: true })
ytext.delete(0, 2)

ytext.insertEmbed(ytext.toString().length, {
  type: "image",
  src: "https://example.com/image.png",
})

console.log("length:", ytext.length)
console.log("text_length:", ytext.toString().length)
console.log("string:", ytext.toString())
console.log("delta:", ytext.toDelta())
