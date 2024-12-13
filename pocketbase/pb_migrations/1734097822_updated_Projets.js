/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ppoji3xdasprm1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hfkrdg0n",
    "name": "Image1",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0ppoji3xdasprm1")

  // remove
  collection.schema.removeField("hfkrdg0n")

  return dao.saveCollection(collection)
})
