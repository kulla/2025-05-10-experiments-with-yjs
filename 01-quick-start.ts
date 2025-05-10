import * as Y from "yjs"

const doc = new Y.Doc()

const ymap = doc.getMap("myMap")
ymap.set("keyA", "foo")

const remote = new Y.Doc()
const ymap2 = remote.getMap("myMap")
ymap2.set("keyB", "bar")

const update = Y.encodeStateAsUpdate(doc)
Y.applyUpdate(remote, update)

console.log(ymap2.toJSON())
