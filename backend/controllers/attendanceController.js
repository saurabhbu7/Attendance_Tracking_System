const Attendance = require('../models/attendanceModel');

// Add attendance record
exports.addAttendance = async (req, res) => {
  const { studentId, date, present } = req.body;

  // Check if attendance record already exists
  const attendanceExists = await Attendance.findOne({ studentId, date });
  if (attendanceExists) return res.status(400).json({ message: 'Attendance record already exists' });

  // Create new attendance record
  const attendance = new Attendance({ studentId, date, present });
  await attendance.save();

  res.json({ message: 'Attendance record added successfully' });
};

// Get attendance records
exports.getAttendance = async (req, res) => {
  const { studentId } = req.params;

  // Fetch attendance records
  const attendanceRecords = await Attendance.find({ studentId });

  res.json(attendanceRecords);
};
