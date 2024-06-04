export default function getStudentIdsSum(students) {
  const sum = students.reduce((total, num) => total + num.id);
  return sum;
}
