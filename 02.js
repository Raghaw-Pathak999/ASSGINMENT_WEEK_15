const student = {
    NAME:'RAGHAW',
    AGE: 18,
    GRADE: 'A'
}

let gardeUPDATE = (GARDEupdate) => {
    student.GRADE = GARDEupdate
}
gardeUPDATE('B')
console.log(student);