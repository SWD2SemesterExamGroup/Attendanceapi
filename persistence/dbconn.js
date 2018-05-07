var mysql = require('mysql');

var pool = mysql.createPool({
    host     : '127.0.0.1',
    port      : '3306',
    user     : 'root',
    database : 'Attendance_DB'
  });
   
  pool.getConnection(function(err, connection) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    }
  );

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