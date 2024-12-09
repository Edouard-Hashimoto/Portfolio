/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ye8lbru9f7tkuft",
    "created": "2024-11-08 09:40:34.452Z",
    "updated": "2024-11-08 09:40:34.452Z",
    "name": "Travail",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7nqrtadd",
        "name": "Oui",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
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
  const collection = dao.findCollectionByNameOrId("ye8lbru9f7tkuft");

  return dao.deleteCollection(collection);
})
