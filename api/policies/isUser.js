// isAdmin.js
module.exports = function(req, res, next) {

  // if (1==1) {
  //   return next(); //proceed to the next policy,
  // }
  var msg= "you are not allow to perform this action until you login the system firstly.";

  if (typeof req.session.UserInfo !='undefined') {

        if(typeof req.session.UserInfo.UserName !='undefined'){

            console.log("isUser::[type:"+ req.session.UserInfo.Type+", name: "+req.session.UserInfo.UserName+"]");
            return next(); //proceed to the next policy,

         }else{

            msg ='You are not permitted to perform this action, becasue you not login yet';
              return res.forbidden(msg);
         }

  }else{

   return res.view('User/login',{'msg':msg});

 }


  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  //  return res.forbidden('You are not permitted to perform this action.');
};
