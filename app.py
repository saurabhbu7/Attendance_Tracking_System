from flask import Flask, render_template, request
from attendance import Attendance

app = Flask(__name__)
attendance = Attendance()

@app.route('/')
def home():
    return render_template('index.html', students=attendance.get_students())

@app.route('/mark_attendance', methods=['POST'])
def mark_attendance():
    student_id = request.form.get('student_id')
    attendance.mark_attendance(student_id)
    return 'OK', 200

if __name__ == '__main__':
    app.run(debug=True)
