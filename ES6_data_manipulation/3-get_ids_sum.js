function getStudentIdsSum(students) {
  return students.reduce((accumulator, students) => accumulator + students.id, 0);
}

export default getStudentIdsSum;
