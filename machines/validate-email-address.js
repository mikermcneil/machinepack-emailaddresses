module.exports = {


  friendlyName: 'Validate email address',


  description: 'Determine whether or not the provided string is an email address.',


  extendedDescription: '',


  inputs: {


  },


  defaultExit: 'success',


  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    success: {
      description: 'Done.',
    },

  },


  fn: function (inputs,exits) {
    return exits.success();
  },



};
