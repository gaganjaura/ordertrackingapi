/**
 * CustomersController
 *
 * @description :: Server-side logic for managing Customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findByMobile : function(req, res){
        Customers.find({mobile:req.param('mobileNumber')})
        .populate('address_info')
        .exec(function(error, result){
            return res.json(result);
        });
        
    },
    findByName : function(req, res){
        Customers.find({first_name:'%' + req.param('firstName') + '%'})
        .populate('address_info')
        .exec(function(error, result){
            return res.json(result);
        });
    },
    checkCredentials: function(req, res){        
        Customers.find()
        .where({
            or: [{mobile:req.param('emailOrMobile')},{email:req.param('emailOrMobile')}]
            ,password:req.param('password')
        })        
        .exec(function(error, result){
            return res.json(result);
        });
    },
    create: function(req, res){
        let customer = {
            first_name: req.body.firstName,
            middle_name: req.body.middleName,
            last_name: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
            full_name: req.body.firstName + " " + (req.body.middleName ? (req.body.middleName + " " + req.body.lastName) : req.body.lastName),
            gender: req.body.gender,
            birth_date: req.body.birthDate,
            password: req.body.password
        }

        Customers.create(customer)
        .exec(function(error, customer){
            if(error) 
                return res.status(500).json({error:error});
            else 
                res.json(customer);
        })
    }
};

