import * as Y from "yjs"

const doc = new Y.Doc()

const ymap = doc.getMap("myMap")
ymap.set("keyA", "foo")

console.log(ymap.toJSON())
