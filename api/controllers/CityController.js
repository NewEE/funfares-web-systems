/**
 * City
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	// Testing function
	create4Fans: function (req,res){
		if(req.method =="POST"){
		console.log("coming to create4Fans [post]");
		}
		else{
			console.log("coming into create4Fans. [get]");
				return res.view('person/create1');
		}
	},


	// ***************************** City *********************************
				// create city function
		createCity: function(req, res) {
					if (req.method == "POST") {
						City.create(req.body.CityModel).exec( function(err, model) {
										return res.send("Successfully Created!");
								});
						} else {
								//console.log("post...[FanfaresController]");
								return res.view('Fanfares/createCity');
						}
				},

				// manage the city or region
			adminCity: function (req,res){
					City.find()
					.paginate({page: req.query.page, limit: 6})
					.exec( function (err,CityModels){
							var pages = Math.ceil(value / 2 );
					 return res.view( 'Fanfares/adminCity', {'CityModels': CityModels, 'count':pages});
					});
				},

			viewCity: function (req,res){
					City.findOne(req.params.id).exec( function(err, Cdata) {
			        if (Cdata != null)
			            return res.view('Fanfares/updateCity', {'Cdata': Cdata});
			        else
			            return res.send("No such City record.");
			    });
				},

				// update City function
			updateCity: function(req, res) {
				    if (req.method == "GET") { // confuse..
				        City.findOne(req.params.id).exec( function(err, Cdata) {
				            if (Cdata == null)
				                return res.send("No such Fanfares data!");
				            else
				                return res.view('Fanfares/updateCity', {'Cdata': Cdata});
				        });
				    } else { // 'POST' method
				        City.findOne(req.params.id).exec( function(err, Cdata) {
									if(Cdata!=null){
				            Cdata.Region = req.body.CityModel.Region;
				            Cdata.City = req.body.CityModel.City;
				            Cdata.save();
				            return res.send("City Record updated");
									}else {
										return res.send("No such City data!, update failed.");
									}
				        });
				    }
				},

				// delete function
			delete: function(req, res) {
				 City.findOne(req.params.id).exec( function(err, Cdata) {
							if (Cdata != null) {
									Cdata.destroy();
									return res.send("City Deleted");
							} else {
									return res.send("City record not found");
							}
					});
				},


};
