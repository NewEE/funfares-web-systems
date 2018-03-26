/**
 * Order
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  book: function(req, res){
    var orderObj = req.body.Order;
    orderObj.fanStatus ="Successful";

    Order.create(orderObj).exec( function(err, Omodel) {
      var id = Omodel.fanID;
      var reserveQuota = Omodel.fanSeats;

        Fanfares.findOne({id:id}).exec( function(err, Fmodel){
          if(err) return res.send("Cannot find the Funfare record. Create failed!");
            Fmodel.Quota=  Fmodel.Quota-reserveQuota ;
            Fmodel.save();
            return res.send("Successfully Created!");
        });

    });
  },

  showOrder: function(req, res){
      var limitN =10;
      var userInfo = req.session.UserInfo;
      var username = userInfo.UserName;
      var userType = userInfo.Type;
      var UserId = userInfo.UserId;

      if(userType=='admin') {
        Order.find()
        .paginate({page: req.query.page, limit: limitN})
        .sort('createdAt DESC')
        .exec( function(err, dataModels) {
        //  console.log(dataModels);
            Order.count().exec( function(err, value) {
                var pages = Math.ceil(value / limitN );
             return res.view('Order/showOrder',{"ODataModel":dataModels,'count':pages});
            });
        });

      }else{

        Order.find()
        .where({UserName:username})
        .paginate({page: req.query.page, limit: limitN})
        .sort('createdAt DESC')
        .exec( function(err, dataModels) {
            Order.count()
            .where({UserName:username})
            .exec( function(err, value) {
                var pages = Math.ceil(value / limitN );
             return res.view('Order/showOrder',{"ODataModel":dataModels,'count':pages});
            });
          });
     }

  },

  cancelOrder: function(req,res){

    var username = req.session.UserInfo.UserName;
    var userType = req.session.UserInfo.Type;
    var orderId = req.params.id;

      Order.findOne()
      .where({id:orderId})
      .exec( function(err, Omodel) {
        if((Omodel.UserName == username || userType =='admin') && Omodel.fanStatus !='Cancel'){
          var fanID = Omodel.fanID;
          var reserveQuota = Omodel.fanSeats;
          //Omodel.UserName= username ;
          Omodel.fanStatus='Cancel';// update the status
          Omodel.save();

            Fanfares.findOne({id:fanID}).exec( function(err, Fmodel){
              if(err) return res.send("Cannot find the Funfare record. Cancel failed!");
                Fmodel.Quota=  Number(Fmodel.Quota) + Number(reserveQuota) ;
                Fmodel.save();
                return res.send("Successfully Canceled!");
            });
        }else{
          var msg = "You Cannot cancel this order because you are not correct user or This Order has been Canceled !";

            return res.send(msg);
        }
      });

  },

  showUsers: function (req, res){
    var UserInfo = req.session.UserInfo;
    var userModels = new Array();
    var city = req.params.id;
    var pages = 1;
      Order.find()
      .where({fanCity:city})
      .exec(function(err,model){

          if(typeof model[0] != 'undefined') {
            userModels[0] = model[0].UserName;
            var i,j;
            for(j=0,i=0;j<model.length;j++)
             for(i=0;i<userModels.length;i++){
                  if(userModels[i] == model[j].UserName){
                    continue;
                  }
                  userModels[i+1] =model[j].UserName;
              }
          }
           return res.view('Order/showUsers',{"userModels":userModels,'count':pages});
      });
  },

  viewUserDetails: function(req, res){
      var limitN =10;

      var name = req.query.name;
      var userType = req.session.UserInfo.Type;


      if(userType=='admin') {
        Order.find()
        .where({UserName:name})
        .paginate({page: req.query.page, limit: limitN})
        .sort('createdAt DESC')
        .exec( function(err, dataModels) {
            Order.count()
            .where({UserName: name})
            .exec( function(err, value) {
                var pages = Math.ceil(value / limitN );
             return res.view('Order/showOrder',{"ODataModel":dataModels,'count':pages});
            });
          });
     }


  },

    AppshowOrder: function(req, res){

        var userInfo = req.session.UserInfo;
        var username = userInfo.UserName;
        var userType = userInfo.Type;
      
        if(userType=='admin') {
          Order.find()
          .sort('createdAt DESC')
          .exec( function(err, dataModels) {
               return res.json(dataModels);
          });

        }else{

          Order.find()
          .where({UserName:username})
          .sort('createdAt DESC')
          .exec( function(err, dataModels) {
               return res.json(dataModels);
            });
       }

    },

};
