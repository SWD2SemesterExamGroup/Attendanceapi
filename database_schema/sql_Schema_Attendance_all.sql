## Database creation of Course Registration
drop database if exists Attendance_DB;
create database Attendance_DB;

use Attendance_DB;

## When the student is registered for a course. Registration attempt is a success
-- drop table if exists CourseRegistrations;
create table CourseRegistrations(
	ID bigint primary key auto_increment,
	CourseID bigint, -- Should refer to the KEA database for CourseID
	StudentID bigint, -- Should refer to the KEA database for StudentID
	AttemptSuccess bit default 0,
	TimeStamp datetime not null default NOW()
);

-- 18:15:44	create table CourseRegistrations(  ID bigint primary key auto_increment,  CourseID int, -- Should refer to the KEA database for CourseID  StudentID bigint, -- Should refer to the KEA database for StudentID  AttemptSuccess bit default 0,  TimeStamp datetime not null default NOW(),  foreign key(CourseID) references KEA_Organization_DB.Courses(ID) on delete cascade,  foreign key(StudentID) references KEA_Organization_DB.Students(ID) on delete cascade )	Error Code: 1005. Can't create table `attendance_db`.`courseregistrations` (errno: 150 "Foreign key constraint is incorrectly formed")	0.047 sec


## Table to log attempts on password from students
-- drop table if exists LogAttempts;
create table LogAttempts(
	ID bigint auto_increment primary key,
	CourseID bigint, -- Should refer to the KEA database for CourseID
	StudentID bigint, -- Should refer to the KEA database for StudentID
	AttemptedPassword varchar(150) not null, -- Should store attempted used password
	AttemptSuccess bit default 0
);