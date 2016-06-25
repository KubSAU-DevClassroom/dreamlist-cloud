var types = {};

/**
 * @type {{type: string}}
 */
types.Boolean = {type: 'boolean'};

types.Color = {
  type: 'string',
  enum: [
    'white',
    'black',
    'yellow',
    'green',
    'red',
    'deep_blue',
    'light_blue',
    'orange',
    'violet',
    'gold',
    'silver',
    'brown',
    'pink',
    'grey',
    'aubergine',
    'beige',
    'dark-beige',
    'turquoise',
    'bordeaux',
    'dark-grey',
    'lilac',
    'dark-brown',
    'cherry',
    'bright-green',
    'bright-blue',
    'dark-green',
    'dark-blue'
  ]
};

/**
 * @type {{type: string, pattern: RegExp}}
 */
types.ObjectId = {type: 'string', pattern: /^[0-9A-z]{24}$/};

/**
 * @type {{type: string, format: string}}
 */
types.Timestamp = {type: 'string', format: 'date-time'};

types.NotificationOptions = {
  type: "string",
  enum: [
    0,
    10,
    5,
    15,
    30,
    60
  ]
};

types.TodoStatus = {
  type: "string",
  enum: ["started", "completed"]
};

module.exports = types;
