var types = require("./types");

var users = {
  "type": "object",
  require: ["_id", "created", "modified", "name"],
  "properties": {
    _id: types.ObjectId,
    created: types.Timestamp,
    modified: types.Timestamp,

    name: { type: "string", maxLength: 80 },
    description: { type: "string", maxLength: 120 },
    avatar: { type: "string", maxLength: 255 }
  }
};
