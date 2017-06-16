 /**
  * Enum for teams.
  * @name Team
  * @enum {Object}
  * @readonly
  */
var Teams = {
  /** The value for Red team. */
  Red: {
    name: "Red",
    mod: 1
  },
    /** The value for Blue team. */
  Blue: {
    name: "Blue",
    mod: -1
  },
    /** The value for a null team */
  Null: {
    name: "White",
    mod: 0
  }
}

module.exports = Teams;
