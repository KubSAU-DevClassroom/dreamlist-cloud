var types = require("./types");

var categories = {
  "type": "object",
  require: ["_id", "created", "modified", "name", "userId"],
  "properties": {
    _id: types.ObjectId,
    created: types.Timestamp,
    modified: types.Timestamp,
    name: { type: "string", maxLength: 80 },
    userId: types.ObjectId,
    color: types.Color
  }
};
