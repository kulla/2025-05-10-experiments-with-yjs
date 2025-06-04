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

const relativePosition = Y.createRelativePositionFromTypeIndex(ytext, 6)

console.log("Relative Position:", relativePosition)

const absolutePosition = Y.createAbsolutePositionFromRelativePosition(
  relativePosition,
  doc,
)

console.log("Absolute Position:", Object.keys(absolutePosition as object))
