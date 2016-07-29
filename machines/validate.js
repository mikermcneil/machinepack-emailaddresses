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

    // Import `validator`.
    var Validator = require('validator');

    // If the input string validates as an email, return through
    // the `success` exit.
    if (Validator.isEmail(inputs.string)) {
      return exits.success();
    }

    // Otherwise return through the `invalid` exit.
    return exits.invalid();

  },



};
