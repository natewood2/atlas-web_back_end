function updateStudentGradeByCity(studentID, city, newGrades) {
  return studentID
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeUpdate = newGrades.find((grade) => grade.studentId === student.id);

      return {
        ...student,
        grade: gradeUpdate ? gradeUpdate.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
