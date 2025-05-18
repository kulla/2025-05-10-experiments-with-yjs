import * as Y from "yjs"

const doc = new Y.Doc()

const ytext = doc.getText("example")

ytext.insert(0, "Hello ")
ytext.insert(6, "World", { bold: true })
ytext.insert(ytext.length, "! ", { bold: false })
ytext.insertEmbed(ytext.length, {
  type: "image",
  src: "https://example.com/image.png",
})

console.log("Delta", ytext.toDelta())

let firstNode = ytext._start
const nodes: Y.Item[] = []

while (firstNode) {
  nodes.push(firstNode)
  firstNode = firstNode.right
}

console.log(
  "First node:",
  nodes.map((node) => ({
    id: node.id.clock,
    content: node.content,
  })),
)
