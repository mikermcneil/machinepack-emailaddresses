module.exports = {


  friendlyName: 'Validate email address',


  description: 'Determine whether or not the provided string is an email address.',


  inputs: {

    string: {
      example: 'foo@foobar.com',
      description: 'The candidate email address to validate.',
      required: true
    }

  },


  exits: {

    success: {
      friendlyName: 'Valid email address',
      description: 'The provided string was a valid email address.'
    },

    invalid: {
      friendlyName: 'Invalid email address',
      description: 'The provided string was not a valid email address.'
    }

  },


  fn: function (inputs,exits) {
    var Validator = require('validator');

    if (Validator.isEmail(inputs.string)) {
      return exits.success();
    }
    return exits.invalid();

  },



};
