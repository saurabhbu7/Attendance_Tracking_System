class Student:
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.is_present = False

    def mark_attendance(self):
        self.is_present = True
