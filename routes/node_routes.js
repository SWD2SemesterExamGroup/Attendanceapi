module.exports = function(app, db) {

    // create
    app.post('/insertcourseregistration', (req, res) => {
        // You'll create your note here.
        console.log(req.body);
        res.send('attendance ' + req.body.name)
      });

    // read
    app.get('/get', (req, res) => {
        // You'll create your note here.
        
        res.send('attendance ')
      });

    // update
    app.post('/insertcourseregistration', (req, res) => {
        // You'll create your note here.
        console.log(req.body);
        res.send('attendance ' + req.body.name)
      });

    // delete
    app.post('/delete', (req, res) => {
        // You'll create your note here.
        console.log(req.body);
        res.send('attendance ' + req.body.name)
      });
};