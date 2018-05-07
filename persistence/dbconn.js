var mysql = require('mysql');
var config = require('../config.js').dbconfig;
//var configH = require('../config.js').host;
//var configP = require('../config.js').port;
//var configU = require('../config.js').user;
//var configD = require('../config.js').database;

  let pool = mysql.createPool({
    host: config.host,
    port: config.post,
    user: config.user,
    database: config.database
  });
  
  pool.getConnection(function(err, connection) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  });

  function insertAttendance(reqCourseID, reqStudentID, reqAttemptSuccess) {
    
    console.log(reqAttemptSuccess + 'mm test 20 line');
    // dummy db
    //CourseID bigint, 1
    //StudentID bigint 1

      // from db
      // ID bigint primary key auto_increment,
	    //CourseID bigint,
	    //StudentID bigint,
	    //AttemptSuccess bit default 0,
      //TimeStamp datetime

      // TODO: Maybe split into two diffrent getConnection.

      pool.getConnection(function(err, connection) {
        
        if ((reqAttemptSuccess == 'true')) {
          let isTrue = (reqAttemptSuccess == 'true');
          let post = {CourseID: reqCourseID, StudentID: reqStudentID, AttemptSuccess: isTrue};
          pool.query('INSERT INTO CourseRegistrations SET ?', post, function (error, results, fields) {
            if (error) {
              console.log(error);
            }
          });  
        }else {
          let post = {CourseID: reqCourseID, StudentID: reqStudentID};
          pool.query('INSERT INTO CourseRegistrations SET ?', post, function (error, results, fields) {
            if (error) {
              console.log(error);
            }
          });
        } 
      connection.release();
    });
  }

  module.exports = {
    insertAttendance: insertAttendance
  };