var types = require("./types");

var todos = {
  type: "object",
  require: ["_id", "created", "modified", "name", "userId", "categoryId", "status"],
  properties: {
    _id: types.ObjectId,
    created: types.Timestamp,
    modified: types.Timestamp,
    name: { type: "string", maxLength: 80 },
    userId: types.ObjectId,
    place: { type: "string", maxLength: 120 },
    status: types.TodoStatus,
    categoryId: types.ObjectId,
    finishDate: types.Timestamp,
    notifyTime: types.NotificationOptions
  }
};
