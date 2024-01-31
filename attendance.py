from student import Student

class Attendance:
    def __init__(self):
        self.students = [
            Student('1', 'John Doe'),
            Student('2', 'Jane Doe'),
            Student('3', 'Jim Doe')
        ]

    def get_students(self):
        return self.students

    def mark_attendance(self, student_id):
        for student in self.students:
            if student.id == student_id:
                student.mark_attendance()
                break
