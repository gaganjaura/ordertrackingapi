/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    
    attributes: {
        customer_id: {
            type: 'string',
            required: true
        },
        order_number: {
            type: 'integer',
            required: true,
            autoIncrement: true
        },        
        order_date: {
            type: 'date',
            required: true
        },
        order_status:{
            type: 'string',
            enum: ['Pending','Delivered','Completed','Shipped'],
            required: true
        },
        proposed_delivery_date: {
            type: 'date',
            required: true
        },
        actual_delivery_date: {
            type: 'date'
        },
        invoice_amount: {
            type: 'float',
            required: true
        },
        amount_received: {
            type: 'float',
            required: true
        },
        discount: {
            type: 'float'
        },
        tax: {
            type: 'float'
        },
        order_detail: {
          collection: 'orderDetail'
        }
    },
    connection:'mongodb'
};
    