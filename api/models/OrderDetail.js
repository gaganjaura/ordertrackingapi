/**
 * OrderDetail.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    
    attributes: {
        sequence_number: {
            type: 'integer',
            required: true            
        },
        order_name: {
            type: 'string',
            required: true
        },
        quantity: {
            type: 'integer',
            required: true
        },
        amount: {
            type: 'float',
            required: true
        },
        order_status: {
            type: 'string',
            enum: ['Pending','Delivered','Completed','Shipped'],
            required: true
        },
        delivery_date: {
            type: 'date'
        }
    },
    connection:'mongodb'
};
    
    