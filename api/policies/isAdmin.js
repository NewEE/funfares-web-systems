// isAdmin.js
module.exports = function(req, res, next) {

  // if (1==1) {
  //   return next(); //proceed to the next policy,
  // }
  //console.log("req.session.UserInfo: "+ (typeof req.session.UserInfo) );

  var msg= "you are not allow to perform this action until you login the system firstly.";

  if (typeof req.session.UserInfo !='undefined') { //don't login

        if( typeof req.session.UserInfo.Type !='undefined' && req.session.UserInfo.Type == 'admin'){

            console.log("isadmin::[type:"+ req.session.UserInfo.Type+", name: "+req.session.UserInfo.UserName+"]");

            return next(); //proceed to the next policy,

        }else{
            if(typeof req.session.UserInfo.Type !='undefined')
            console.log("isadmin::[type:"+ req.session.UserInfo.Type+", name: "+req.session.UserInfo.UserName+"]");

            msg ='You are not permitted to perform this action because you are not login with admin role.';
            return res.forbidden(msg);
        }

 }else{ // need to login
   res.view('User/login',{'msg':msg});
 }


  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  //return res.forbidden('You are not permitted to perform this action.');
};
