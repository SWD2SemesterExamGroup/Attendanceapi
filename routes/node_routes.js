const db = require('../persistence/dbconn');

module.exports = function(app) {

    // create
    app.post('/insertcourseregistration', (req, res) => {
        // You'll create your note here.
       db.insertAttendance(req.body.courseID, req.body.studentID, req.body.successA);

        console.log(req.body);

        res.status(200).json({
          success: true,
          message: 'it works'
          
        });
      });

    // read
    app.get('/get', (req, res) => {

      });

    // update
    app.post('/updatecourseregistration', (req, res) => {

      });

    // delete
    app.post('/delete', (req, res) => {

      });
};