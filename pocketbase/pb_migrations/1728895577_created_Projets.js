/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0ppoji3xdasprm1",
    "created": "2024-10-14 08:46:17.734Z",
    "updated": "2024-10-14 08:46:17.734Z",
    "name": "Projets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b1yv5ib1",
        "name": "nom_projet",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0ppoji3xdasprm1");

  return dao.deleteCollection(collection);
})
