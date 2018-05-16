# Attendance api
Node.js

## Repository Package Include
* Source Code, package.json, configexample.txt

## Installation Guide
1. Open npm console in project folder(where package.json is located).
2. Do npm install.
3. Create config.js.
4. insert basic layout from configexample.txt.
5. fill out the spots in config.js with database information

## Settings
1. application.properties
    * Localhost(at the moment)
    * Application Port: 8000
2. npm start in console and the api wil be running on a specefic port.

## Paths
* http://localhost:8000/insertcourseregistration
body.param: { CourseID: 'int', StudentID: 'int', successAttempt: 'boolean' }

* http://localhost:8000/health
Checks if the service and database is up and running, will return 200 as long as the service is up. but a false db boolean if the db is down.

### Version
- 1.0.5
