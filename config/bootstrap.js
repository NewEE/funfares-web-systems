/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {


//initial the data begin

  var user = {"UserName": "admin", "Password":"1","Type":"admin", "id":1};

  User.create(user).exec( function (err, model) {});

  user = {"UserName": "boss1", "Password":"1","Type":"admin", "id":2};

  User.create(user).exec( function (err, model) {});

  user = {"UserName": "user17427916", "Password":"1","Type":"user", "id":3};

  User.create(user).exec( function (err, model) {});

  user = {"UserName": "17427916", "Password":"1","Type":"user", "id":4};

  User.create(user).exec( function (err, model)  { });


var fanfares =
      {
        "Region": "EAR",
        "City": "Seoul",
        "Class": "1",
        "Price": "6000",
        "Image": "http://www.lottehotel.com/upload/imagePool/201704/MAIN/20170411151942304_1.jpg",
        "ValidDate": "2017-12-16",
        "Quota": "100",
        "B_Dates": "2017-12-16",
        "E_Dates": "2017-12-19",
        "createdAt": "2017-12-11T01:36:06.891Z",
        "updatedAt": "2017-12-11T01:36:06.891Z",
        "id": 1
      };
Fanfares.create(fanfares).exec( function (err, model) {});

fanfares ={
        "Region": "EAR",
        "City": "Osaka",
        "Class": "1",
        "Price": "4000",
        "Image": "https://www.jtbgenesis.com/pic/tour/141231osakajo0000184215.jpg",
        "ValidDate": "2017-12-10",
        "Quota": "55",
        "B_Dates": "2017-12-11",
        "E_Dates": "2017-12-15",
        "createdAt": "2017-12-22T06:37:41.778Z",
        "updatedAt": "2017-10-22T06:37:41.778Z",
        "id": 2
      };
Fanfares.create(fanfares).exec( function (err, model) {});

fanfares = {
        "Region": "SEA",
        "City": "Cebu",
        "Class": "2",
        "Price": "4000",
        "Image": "http://cebubooking.com/wp-content/uploads/2015/10/Cebu-Attractions.jpg",
        "ValidDate": "2017-12-09",
        "Quota": "120",
        "B_Dates": "2017-12-16",
        "E_Dates": "2017-12-29",
        "createdAt": "2017-10-22T06:38:16.880Z",
        "updatedAt": "2017-10-22T06:38:16.880Z",
        "id": 3
      };
Fanfares.create(fanfares).exec( function (err, model) {});

fanfares =  {
        "Region": "SEA",
        "City": "Singapore",
        "Class": "2",
        "Price": "40000",
        "Image": "https://www.fourseasons.com/alt/img-opt/~70.1002/publish/content/dam/fourseasons_magazine/SIN/marina-bay-sunset-singapore-1600x900.jpg",
        "ValidDate": "2017-12-26",
        "Quota": "1000",
        "B_Dates": "2017-12-21",
        "E_Dates": "2017-12-29",
        "createdAt": "2017-10-22T06:39:03.169Z",
        "updatedAt": "2017-10-22T06:39:03.169Z",
        "id": 4
      };
Fanfares.create(fanfares).exec( function (err, model) {});

fanfares =
      {
        "Region": "AMR",
        "City": "Los Angeles",
        "Class": "2",
        "Price": "520",
        "Image": "https://ssl.c.photoshelter.com/img-get/I00006EoU9NPa_7c/s/860/860/9176B055.jpg",
        "ValidDate": "2017-12-31",
        "Quota": "77",
        "B_Dates": "2018-10-31",
        "E_Dates": "2018-11-03",
        "createdAt": "2017-12-22T06:39:56.074Z",
        "updatedAt": "2017-10-22T06:39:56.074Z",
        "id": 5
      };
Fanfares.create(fanfares).exec( function (err, model) {});

fanfares =
      {
        "Region": "AMR",
        "City": "Boston",
        "Class": "1",
        "Price": "5208",
        "Image": "http://az616578.vo.msecnd.net/files/2016/03/04/635927225087502121-716043219_Boston-skyline.jpg",
        "ValidDate": "2018-10-18",
        "Quota": "99",
        "B_Dates": "2018-10-25",
        "E_Dates": "2018-11-03",
        "createdAt": "2017-12-22T06:40:49.693Z",
        "updatedAt": "2017-12-22T06:40:49.693Z",
        "id": 6
      };
Fanfares.create(fanfares).exec( function (err, model) {});


fanfares =
      {
        "Region": "EAR",
        "City": "Osaka",
        "Class": "1",
        "Price": "1024",
        "Image": "http://az616578.vo.msecnd.net/files/2016/03/04/635927225087502121-716043219_Boston-skyline.jpg",
        "ValidDate": "2017-12-18",
        "Quota": "20000",
        "B_Dates": "2017-12-16",
        "E_Dates": "2017-12-30",
        "createdAt": "2017-12-27T03:14:06.992Z",
        "updatedAt": "2017-12-27T03:14:06.992Z",
        "id": 7
      };
Fanfares.create(fanfares).exec( function (err, model) {});


fanfares =
      {
        "Region": "AMR",
        "City": "Seoul",
        "Class": "2",
        "Price": "10000",
        "Image": "http://www.lottehotel.com/upload/imagePool/201704/MAIN/20170411151942304_1.jpg",
        "ValidDate": "2017-12-31",
        "Quota": "500",
        "B_Dates": "2018-01-10",
        "E_Dates": "2018-01-18",
        "createdAt": "2017-10-24T02:25:04.536Z",
        "updatedAt": "2017-10-24T02:25:04.536Z",
        "id": 8
      };
Fanfares.create(fanfares).exec( function (err, model) {});

fanfares =
      {
        "Region": "SEA",
        "City": "Singapore",
        "Class": "1",
        "Price": "601",
        "Image": "/images/imgs/Singapore.jpeg",
        "ValidDate": "2017-12-31",
        "Quota": "10",
        "B_Dates": "2018-02-27",
        "E_Dates": "2018-03-08",
        "createdAt": "2017-10-24T11:30:17.608Z",
        "updatedAt": "2017-11-15T01:57:10.928Z",
        "id": 9
      };
Fanfares.create(fanfares).exec( function (err, model) {});



var order =
      {
        "UserName": "user17427916",
        "fanID": "3",
        "fanCity": "Osaka",
        "fanBDate": "2017-10-31",
        "fanEDate": "2017-11-15",
        "fanPrice": "4000",
        "fanClass": "Business",
        "fanSeats": "1",
        "fanStatus": "Successful",
        "createdAt": "2017-11-16T12:37:30.784Z",
        "updatedAt": "2017-11-16T12:37:30.784Z",
        "id": 1
      };
Order.create(order).exec( function (err, model) {});

order = {
        "UserName": "17427916",
        "fanID": "5",
        "fanCity": "Singapore",
        "fanBDate": "2017-12-01",
        "fanEDate": "2017-12-29",
        "fanPrice": "40000",
        "fanClass": "Economy",
        "fanSeats": "3",
        "fanStatus": "Successful",
        "createdAt": "2017-11-16T13:09:22.962Z",
        "updatedAt": "2017-11-16T13:09:22.962Z",
        "id": 2
      };
Order.create(order).exec( function (err, model) {});

order =  {
        "UserName": "17427916",
        "fanID": "5",
        "fanCity": "Singapore",
        "fanBDate": "2017-12-01",
        "fanEDate": "2017-12-29",
        "fanPrice": "40000",
        "fanClass": "Economy",
        "fanSeats": "5",
        "fanStatus": "Cancel",
        "createdAt": "2017-11-16T13:25:27.013Z",
        "updatedAt": "2017-11-17T02:51:48.204Z",
        "id": 3
      };
Order.create(order).exec( function (err, model) {});

order = {
        "UserName": "17427916",
        "fanID": "5",
        "fanCity": "Singapore",
        "fanBDate": "2017-12-01",
        "fanEDate": "2017-12-29",
        "fanPrice": "40000",
        "fanClass": "Economy",
        "fanSeats": "7",
        "fanStatus": "Successful",
        "createdAt": "2017-11-17T02:56:40.231Z",
        "updatedAt": "2017-11-17T02:56:40.231Z",
        "id": 4
      };
Order.create(order).exec( function (err, model) {});

order ={
        "UserName": "17427916",
        "fanID": "7",
        "fanCity": "Boston",
        "fanBDate": "2017-10-25",
        "fanEDate": "2017-11-03",
        "fanPrice": "5208",
        "fanClass": "Economy",
        "fanSeats": "9",
        "fanStatus": "Cancel",
        "createdAt": "2017-11-17T02:58:41.146Z",
        "updatedAt": "2017-11-17T03:10:24.095Z",
        "id": 5
      };
Order.create(order).exec( function (err, model) {});

order =
      {
        "UserName": "user17427916",
        "fanID": "5",
        "fanCity": "Singapore",
        "fanBDate": "2017-12-01",
        "fanEDate": "2017-12-29",
        "fanPrice": "40000",
        "fanClass": "Economy",
        "fanSeats": "3",
        "fanStatus": "Successful",
        "createdAt": "2017-11-17T04:22:07.587Z",
        "updatedAt": "2017-11-17T04:22:07.587Z",
        "id": 6
      };
Order.create(order).exec( function (err, model) {});

order =
      {
        "UserName": "17427916",
        "fanID": "2",
        "fanCity": "Seoul",
        "fanBDate": "2017-11-01",
        "fanEDate": "2017-11-09",
        "fanPrice": "6003",
        "fanClass": "Economy",
        "fanSeats": "2",
        "fanStatus": "Successful",
        "createdAt": "2017-11-17T06:56:58.932Z",
        "updatedAt": "2017-11-17T06:56:58.932Z",
        "id": 7
      };
Order.create(order).exec( function (err, model) {});

order =
      {
        "UserName": "17427916",
        "fanID": "4",
        "fanCity": "Cebu",
        "fanBDate": "2017-11-16",
        "fanEDate": "2017-12-29",
        "fanPrice": "4000",
        "fanClass": "Economy",
        "fanSeats": "11",
        "fanStatus": "Successful",
        "createdAt": "2017-11-17T06:57:36.961Z",
        "updatedAt": "2017-11-17T06:57:36.961Z",
        "id": 8
      };
Order.create(order).exec( function (err, model) {});

order =
      {
        "UserName": "17427916",
        "fanID": "6",
        "fanCity": "Los Angeles",
        "fanBDate": "2017-10-31",
        "fanEDate": "2017-11-03",
        "fanPrice": "520",
        "fanClass": "Business",
        "fanSeats": "2",
        "fanStatus": "Successful",
        "createdAt": "2017-11-17T06:57:57.704Z",
        "updatedAt": "2017-11-17T06:57:57.704Z",
        "id": 9
      };
Order.create(order).exec( function (err, model) {});

//initial the data end




  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();

  /*
  var city =
      {
        "Region": "EAR",
        "City": "Osaka",
        "createdAt": "2017-10-22T04:20:01.526Z",
        "updatedAt": "2017-10-22T04:21:53.486Z",
        "id": 1
      };
City.create(city).exec( function (err, model) {});
var city =
      {
        "Region": "EAR",
        "City": "Seoul",
        "createdAt": "2017-10-22T04:23:32.937Z",
        "updatedAt": "2017-10-22T04:23:32.937Z",
        "id": 2
      };
City.create(city).exec( function (err, model) {});
var city =
      {
        "Region": "SEA",
        "City": "Cebu",
        "createdAt": "2017-10-22T04:23:44.574Z",
        "updatedAt": "2017-10-22T04:23:44.574Z",
        "id": 3
      };
City.create(city).exec( function (err, model) {});
var city =
      {
        "Region": "SEA",
        "City": "Singapore",
        "createdAt": "2017-10-22T04:24:00.537Z",
        "updatedAt": "2017-10-22T04:24:00.537Z",
        "id": 4
      };
City.create(city).exec( function (err, model) {});
var city =
      {
        "Region": "AMR",
        "City": "Los Angeles",
        "createdAt": "2017-10-22T04:24:13.273Z",
        "updatedAt": "2017-10-22T04:24:13.273Z",
        "id": 5
      };
City.create(city).exec( function (err, model) {});
var city =
      {
        "Region": "AMR",
        "City": "Boston",
        "createdAt": "2017-10-22T04:28:24.490Z",
        "updatedAt": "2017-10-22T04:28:24.490Z",
        "id": 7
      };
City.create(city).exec( function (err, model) {});

  */
};
