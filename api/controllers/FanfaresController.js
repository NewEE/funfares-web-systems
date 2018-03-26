/**
 * FanfaresController
 *
 * @description :: Server-side logic for managing fanfares
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// create function
	create: function(req, res) {
	    if (req.method == "POST") {
				//console.log("post...");
	        Fanfares.create(req.body.Fanfares).exec( function(err, model) {
	            return res.send("Successfully Created!");
	        });
	    } else {
					//console.log("post...[FanfaresController]");
	        return res.view('Fanfares/create');
	    }
	},

	// json function
	json: function(req, res) {
	    Fanfares.find().exec( function(err, dataModels) {
	        return res.json(dataModels);
	    });
	},

	jsonApp: function(req, res) {
	    Fanfares.find().exec( function(err, dataModels) {
	        return res.json(dataModels);
	    });
	},

	// admin the Objects with paginate
	admin: function (req, res) {
			  var limitN = 6;
		    Fanfares.find()
						.paginate({page: req.query.page, limit: limitN})
						.sort('ValidDate')
		        .exec( function(err, dataModels) {
		            Fanfares.count().exec( function(err, value) {
		                var pages = Math.ceil(value / limitN );
		             return res.view( 'Fanfares/admin', {'FdataModels': dataModels, 'count':pages});
		            });
		        });
		},



		// index function /homepage
	index: function(req, res) {

			 var limitN = 6;
			  Fanfares.find( )
				.paginate({page: req.query.page, limit: limitN})
				.where({ValidDate: {'>=': new Date()}})
				.sort('ValidDate')
				.exec( function(err, FdataModels) {
					Fanfares.count().exec( function(err, value) {
							var pages = Math.ceil(value / limitN );
		        return res.view('Fanfares/index',{"FdataModels":FdataModels, 'count':pages});
					});
		    });
		},


		// view function --> show the Update page
	view: function (req, res) {
		    Fanfares.findOne(req.params.id)
				.exec( function(err, Fdata) {
		        if (Fdata != null)

		            return res.view('Fanfares/update', {'Fdata': Fdata});
		        else
		            return res.send("No such Fanfares record.");
		    });
		},

		// viewdetails of Fanfares
		viewdetails: function(req, res){
			Fanfares.findOne(req.params.id).exec( function(err, Fdata) {
					if (Fdata != null){
						var UserName ='guess';
						if(typeof req.session.UserInfo !='undefined')
							//if(typeof req.session.UserInfo.UserName !='undefined')
							UserName = req.session.UserInfo.UserName;

							return res.view('Fanfares/details', {'Fdata': Fdata,'UserName':UserName});
						}
					else
							return res.send("No such Fanfares record.");
			});
		},

		// delete function
	delete: function(req, res) {
	   Fanfares.findOne(req.params.id).exec( function(err, Fdata) {
	        if (Fdata != null) {
	            Fdata.destroy();
	            return res.send("Fanfares Deleted");
	        } else {
	            return res.send("Fanfares not found");
	        }
	    });
		},


		// update function
		update: function(req, res) {
		    if (req.method == "GET") {
		        Fanfares.findOne(req.params.id).exec( function(err, Fdata) {
		            if (Fdata == null)
		                return res.send("No such Fanfares data!");
		            else
		                return res.view('Fanfares/update', {'Fdata': Fdata});
		        });
		    } else { // 'POST' method
		        Fanfares.findOne(req.params.id).exec( function(err, Fdata) {
							if(Fdata!=null){
		            Fdata.Region = req.body.Fanfares.Region;
		            Fdata.City = req.body.Fanfares.City;
								Fdata.Class = req.body.Fanfares.Class;
								Fdata.Price = req.body.Fanfares.Price;
								Fdata.Image = req.body.Fanfares.Image;
								Fdata.ValidDate = req.body.Fanfares.ValidDate;
								Fdata.Quota = req.body.Fanfares.Quota;
								Fdata.B_Dates = req.body.Fanfares.B_Dates;
								Fdata.E_Dates = req.body.Fanfares.E_Dates;
		            Fdata.save();
		            return res.send("Record updated");
							}else {
								return res.send("No such Fanfares data!, update failed.");
							}
		        });
		    }
		},

			// search function
		search: function (req, res) {
			var limitN =2;
			var Conditions = {};
			var defaultBDate ='1991-01-01';
			var defaultEDate ='9991-01-01';
			var defaultBRang ='1';
			var defaultERang ='100000000';

			if (req.method == "POST") {
					var JFConditions = req.body.JFConditions;
							Conditions = JFConditions;
							req.query.page =1;
					}else{
						var query = req.query ;
						Conditions.Region = query.Region ; // typeof string
						Conditions.BPRange = query.BPRange ;
						Conditions.EPRange = query.EPRange ;
						Conditions.B_Dates = query.B_Dates ;
						Conditions.E_Dates = query.E_Dates ;
		 			}


					// console.log("EPRange1: "+  (Conditions.BPRange==null));
					// console.log("EPRange2: "+  (Conditions.BPRange=='undefined'));
					// console.log("EPRange3: "+ (Conditions.BPRange ==''));
					//
					//  console.log("\nafter BR: "+(  Conditions.BPRange ==''? defaultBRang: Conditions.BPRange));
					//  console.log("after ER: "+(  Conditions.EPRange ==''? defaultERang: Conditions.EPRange));
					//  console.log("after BD: "+(  Conditions.B_Dates ==''? defaultBDate: Conditions.B_Dates));
					//  console.log("after ED: "+(  Conditions.E_Dates ==''? defaultEDate: Conditions.E_Dates));
					//  console.log("after R: "+(   Conditions.Region));
					//  console.log("page: "+req.query.page);

					// search engine
					Fanfares.find()
							.paginate({page: req.query.page, limit: limitN})
							.where({Region: {contains: Conditions.Region}})
							.where({Price: {'>=': Conditions.BPRange==''? defaultBRang: Conditions.BPRange,
							 '<=': Conditions.EPRange==''? defaultERang: Conditions.EPRange}})
							.where({ValidDate: {'>=': Conditions.B_Dates ==''?defaultBDate:Conditions.B_Dates,
							 '<=': Conditions.E_Dates ==''?defaultEDate:Conditions.E_Dates }})
							.where({ValidDate: {'>=': new Date()}})
							.sort('ValidDate')
							.exec( function (err, SFdataModels) {
										Fanfares.count()
										.where({Region: {contains: Conditions.Region}})
										.where({Price: {'>=': Conditions.BPRange==''? defaultBRang: Conditions.BPRange,
										 '<=': Conditions.EPRange==''? defaultERang: Conditions.EPRange}})
										.where({ValidDate: {'>=': Conditions.B_Dates ==''?defaultBDate:Conditions.B_Dates,
										 '<=': Conditions.E_Dates ==''?defaultEDate:Conditions.E_Dates }})
										.where({ValidDate: {'>=': new Date()}})
										.exec( function(err, value) {
											var countPages = Math.ceil(value / limitN );
											return res.view('Fanfares/search', {'SFdataModels': SFdataModels, 'count':countPages,'Conditions':Conditions});
								});
							});
		},

		// the Testing function
		Testing:function(req, res){
			var que= req.query;
			var params = req.params; // null
			var body = req.body; //


			var datas = {name: 'w123',address:'hkb4'};

			return res.view('Fanfares/Z_testing',{"Datas":datas});

		},

		showall:function(req, res){
		 	Fanfares.find( )
			.sort('Region')
			.sort('ValidDate')
			.exec( function(err, FdataModels) {
					return res.view('Fanfares/showall',{"FdataModels":FdataModels});
			});

		},

		book: function(req, res){
			Fanfares.create(req.body.Fanfares).exec( function(err, model) {
					return res.send("Successfully Created!");
			});
		}

};
