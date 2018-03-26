/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	Applogin: function (req, res){

		if (req.method == "GET") return ;

		var msg = 'login successfully!';
		var models ={};
		var result ='true';
		User.findOne({UserName:req.body.User.UserName})
		.exec( function (err, user) {

				if (user == null){
						msg = "No such user";
						result ='false';
					}

				if (user.Password != req.body.User.Password){
						msg = "Wrong Password";
						result ='false';
					}


				var UserInfo ={'UserName':user.UserName,"Type":user.Type,"UserId":user.id};
				req.session.UserInfo = UserInfo;

				msg= 'welcome back, '+user.UserName;
				models = user;
				console.log("Applogin: "+msg+"; Type:　" +user.Type);
				return res.json({'msg':msg,'models':models,'result':result});

		});
	},

		login: function (req, res) {
			var msg ='pls login first.';
	    if (req.method == "GET")
	        return res.view('User/login',{'msg':msg});
	    else {

	        User.findOne({UserName:req.body.User.UserName}) //select the User by UserName.
	        .exec( function (err, user) {

	            if (user == null)
	                return res.send("No such user");

	            if (user.Password != req.body.User.Password)	// compare the psw with User.Password
	                return res.send("Wrong Password");

              var UserInfo ={'UserName':user.UserName,"Type":user.Type,"UserId":user.id};
	            req.session.UserInfo = UserInfo; // set the username into the session.

	            console.log("session.id: "+req.session.id); //log the session id.
							msg= 'welcome back, '+user.UserName;

							return res.redirect('/Fanfares/index');

	        })

	    }
		},	 // end of login


		logout: function(req, res) {

			console.log("The current session id " + req.session.id + " is going to be destroyed.");

			req.session.destroy(function(err) {		// destroy the session from the request Object
				var msg ='Log out successfully.';
				// return res.view('Fanfares/index',{'msg':msg});
				return res.redirect('/Fanfares/index');
			});

		}, // end of logout




		setCookie: function(req, res) {

    var tempString = "";

    if (typeof req.cookies.spendingStyle != "undefined") {
        tempString = "Retrieving Cookies: " + req.cookies.spendingStyle;
    } else {
        tempString = "No such cookie";
    }

    if (typeof req.query.age != "undefined") {
        res.cookie('spendingStyle', "Big Spender", {
            maxAge: req.query.age,
            httpOnly: true
        });
    }

    res.send(tempString);

	}, // end of setCookie


	showSupervisees: function (req, res) {

    User.findOne(req.params.id).populateAll().exec( function (err, model) {

        return res.json(model);

    })
	},

	show22: function( req, res) {

    User.findOne(req.params.id).populateAll({age:22}).exec(
        function (err, model) {

        if (model == null) return res.redirect("/User/login");

        console.log("super.len: "+model.supervises.length);

        return res.json(model.supervises);

    })
	},


	addSupervisee: function (req, res) {

	User.findOne(req.params.id).exec( function (err, model) {

			if (model !== null) {
					model.supervises.add(req.query.pid)
					model.save( function (err, model) {

							if (err) return res.send("Already added");

							return res.send("Supervisee added.");

					});
			}
			else {
					return res.send("User not found!");
			}
	})

},


	removeSupervisee: function (req, res) {

	    User.findOne(req.params.id).exec( function (err, model) {

	        if (model !== null) {
	            model.supervises.remove(req.query.pid)
	            model.save();
	            return res.send("Supervisee removed!");
	        }
	        else {
	            return res.send("User not found!");
	        }
	    })

	},


};
