/**
 * OrdersController
 *
 * @description :: Server-side logic for managing Addresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findCustomerOrders: function(req, res){
        Orders.find({customer_id:req.param('customerId')})
        .populate('order_detail')
        .exec(function(error, result){
            return res.json(result);
        });
    }
};

