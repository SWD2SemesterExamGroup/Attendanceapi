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
* responds:
body.param: { CourseID: 'int', StudentID: 'int', successAttempt: 'boolean' }

* http://localhost:8000/health
* responds: success: boolean. always true if service is up
            db: boolean. true if db up false if down
            message: 'text'


### Version
- 1.0.5
