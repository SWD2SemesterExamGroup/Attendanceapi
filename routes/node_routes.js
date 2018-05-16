const db = require('../persistence/dbconn');

module.exports = function(app) {

    // create
    app.post('/insertcourseregistration', (req, res) => {
        // You'll create your note here.

        if(req.body.CourseID == null && req.body.StudentID == null && req.body.successAttempt == null) {
          res.status(404).json({
            success: false,
            message: 'need correct data'
            
          });
        } else {
       db.insertAttendance(req.body.CourseID, req.body.StudentID, req.body.successAttempt);

        console.log(req.body);

        res.status(200).json({
          success: true,
          message: 'it works'
          
        });
      }
      });
    

    // read
    app.get('/health', (req, res) => {
      let resu = db.ping();

      resu.then(result => {
        if(result) {
          res.status(200).json({
            success: true,
            db: true,
            message: 'both service and DB is up and running'
            
          });
        }else {
          res.status(200).json({
            success: true,
            db: false,
            message: 'service is running but db is down'
            
          });
        }
      });
      
    });
    app.get('/get', (req, res) => {

      });

    // update
    app.post('/updatecourseregistration', (req, res) => {

      });

    // delete
    app.post('/delete', (req, res) => {

      });
};