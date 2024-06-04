export default function getStudentIdsSum(students) {
  if (!(Array.isArray(students))) {
    return 0;
  }
  const sum = students.reduce((total, num) => total + num.id);
  console.log(sum);
  return sum;
}
