/**
 * Customers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    first_name: {
      type: 'string',
      required: true
    },
    middle_name:{
      type: 'string'
    },
    last_name: {
      type: 'string',
      required: true
    },
    mobile: {
      type: 'string',
      required: true,
      unique: true
    },
    full_name: {
      type: 'string'
    },
    gender: {
      type: 'string',
      enum: ['Male','Female','Other'],
      defaultsTo: 'Male'
    },
    birth_date: {
      type: 'date'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    role: {
      type: 'string',
      defaultsTo: 'User'
    },
    address_info: {
      model: 'address'
    }
  },
  connection:'mongodb'
};
