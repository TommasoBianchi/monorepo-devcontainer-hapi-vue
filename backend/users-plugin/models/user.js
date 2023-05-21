const Joi = require('joi');
const Schwifty = require('@hapipal/schwifty');
const joiToJsonSchema = require('joi-to-json');

// A user model only with an id and name
module.exports = class User extends Schwifty.Model {
  /**
   * Description placeholder
   * @date 5/21/2023 - 5:03:42 PM
   *
   * @static
   * @readonly
   * @type {string}
   */
  static get tableName() {
    return 'users';
  }

  /**
   * Description placeholder
   * @date 5/21/2023 - 5:03:51 PM
   *
   * @static
   * @readonly
   * @type {*}
   */
  static get joiSchema() {
    return Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      created_at: Joi.date(),
      updated_at: Joi.date(),
    });
  }

  /**
   * Description placeholder
   * @date 5/21/2023 - 10:08:14 PM
   *
   * @static
   * @readonly
   * @type {*}
   */
  static get jsonSchema() {
    return joiToJsonSchema(this.joiSchema);
  }
};
