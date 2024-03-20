#!/bin/bash
# Create directory structure
mkdir -p Attendance_Tracking_System/client/src Attendance_Tracking_System/client/public Attendance_Tracking_System/client/config
mkdir -p Attendance_Tracking_System/server/src Attendance_Tracking_System/server/config Attendance_Tracking_System/server/tests
mkdir -p Attendance_Tracking_System/common

# Create necessary files
touch Attendance_Tracking_System/client/src/App.js Attendance_Tracking_System/client/src/Login.js Attendance_Tracking_System/client/src/styles.css Attendance_Tracking_System/client/config/config.js
touch Attendance_Tracking_System/server/src/server.js Attendance_Tracking_System/server/src/routes.js Attendance_Tracking_System/server/src/controllers.js Attendance_Tracking_System/server/src/models.js Attendance_Tracking_System/server/config/config.js Attendance_Tracking_System/server/tests/tests.js
touch Attendance_Tracking_System/common/common.js
