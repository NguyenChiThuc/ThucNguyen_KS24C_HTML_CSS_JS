let students = [
    {name: "Tran Tri Duong", scores: {math: 9, english: 8, literature: 7}},
    {name: "Ha Bich Ngoc", scores: {math: 3, english: 2, literature: 5}},
    {name: "Bui Thai Son", scores: {math: 9.5, english: 9, literature: 9}}
];
function totalStudent(students){
    return students.filter(student => {
        let {math, english, literature} = student.scores;
        let tbm = (math + english + literature) / 3;
        if(tbm >= 8){
            return students;
        }
    });
}
console.log("Danh sach sinh vien co diem trung binh >= 8 la: ")
console.log(totalStudent(students))