// var javaObject = {
//     id : 1,
//     ten: "Bảo",
//     namSinh: 2002,
//     CMND : {
//         maCMND: 123435234,
//         ngayCap: "13/01/2023"
//     },
//     getTuoi: function(){
//         return (new Date(Date.now)).getFullYear() - this.namSinh;
//     }
// }

// // console.log(JSON.stringify(javaObject));

// var JSONObject = '{"id":1,"ten":"Bảo","namSinh":2002,"CMND":{"maCMND":123435234,"ngayCap":"13/01/2023"}}';
// // console.log(JSON.parse(JSONObject));

// console.log(javaObject.CMND.ngayCap);
// var getedField = "CMND";
// console.log(javaObject[getedField]);

// javaObject.GPLX = {
//     id: 12345,
//     loai : 'B1'
// }
// console.log(javaObject);
// delete javaObject.GPLX; 

// //Bài tập 1
// var Student = {
//     MSSV: "2011064338",
//     Ten: "Phạm Văn Bảo",
//     NamSinh: 2002,
//     Lop: "20DTHA3",
//     Khoa: "CNTT",
//     getMSSV: function() {
//         return this.MSSV;
//     },
//     getTen: function() {
//         return this.Ten;
//     },
//     getTuoi: function() {
//         return new Date().getFullYear() - this.NamSinh;
//     },
//     getLop: function() {
//         return this.Lop;
//     },
//     getKhoa: function() {
//         return this.Khoa;
//     }
// };

// // Thêm thuộc tính KhoaHoc
// Student.KhoaHoc = "2020-2024";

// // Thêm phương thức getKhoaHoc
// Student.getKhoaHoc = function() {
//     return this.KhoaHoc;
// };

// // In ra các thuộc tính và phương thức của object Student trước khi xoá
// console.log("Trước khi xoá thuộc tính:");
// console.log(Student);

// // Xoá 2 thuộc tính vừa thêm
// delete Student.KhoaHoc;
// delete Student.getKhoaHoc;

// // In ra các thuộc tính và phương thức của object Student sau khi xoá
// console.log("Sau khi xoá thuộc tính:");
// console.log(Student);

// // Chuyển object JS sang JSON
// var JSONObject = JSON.stringify(Student);
// console.log("Object JS đã chuyển sang JSON:");
// console.log(JSONObject);

// // Chuyển JSON về object JS
// var ConvertedObject = JSON.parse(JSONObject);
// console.log("Object JSON đã chuyển về JS:");
// console.log(ConvertedObject);

// function Student(Ho, Ten, NamSinh, Lop, Khoa, KhoaHoc){
//     this.Ho = Ho;
//     this.Ten = Ten;
//     this.NamSinh = NamSinh;
//     this.Lop = Lop;
//     this.Khoa = Khoa;
//     this.KhoaHoc = KhoaHoc;
//     this.getHoTen =  function(){
//         return this.Ho+" "+this.Ten;
//     }
//     this.getTuoi = function() {
//         return new Date().getFullYear() - this.NamSinh;
//     }
//     this.getThongTinSV = function(){
//         return `Lop ${this.Lop} Khoa ${this.Khoa}`
//     }
// }


// var Bao = new Student("Pham Van", "Bao", 2002, "20DTHA3", "CNTT", "2020-2024");

// var Khoa = new Student("Pham Van", "Bao", 2002, "20DTHA3", "CNTT", "2020-2024");
// Student.prototype.Score = 10;
// console.log(Bao);
// console.log(Khoa);

// function sum(a, b){
//     console.log(typeof a); //callback
//     return a+b;
// }
// sum(show);
// function show(){
//     console.log(1);
// }

// function Direct(sum, sub){
//     var a = parseInt(prompt("Nhập số thứ nhất"));
//     var b = parseInt(prompt("Nhập số thứ hai"));
//     var c = prompt("Nhập vào phép tính");
//     if(c == "+")
//         console.log(sum(a,b));
//     else
//         console.log(sub(a,b));

// }

// function sumf(a,b){
//     console.log("Hàm sum đang được gọi")
//     return a + b;
// }

// function subf(a,b){
//     console.log("Hàm sub đang được gọi")
//     return a - b;
// }
// // Direct(sumf, subf);

// Direct((a,b) =>{
//     console.log("Hàm sum đang được gọi")
//     return a + b;
// }, (a, b) => {
//     console.log("Hàm sub đang được gọi")
//     return a - b;
// }

// )

// function Showmess(messfn){
//     messfn("Bảo"); //nếu là callback
// }
// function Showmes2(message){
//     console.log(message)
// }
// Showmess(Showmes2);

// setTimeout(() =>{
//     alert("hehe")
// }, 5000); //handler, callbackfn => đều là callback
// setInterval(()=>{
//     console.log("hihi");

// }, 1000);
// var dateobject = new Date(Date.now());
// dateobject.getDate(); //lấy ngày
// dateobject.getDay(); //lấy thứ 0 - 7

// var arrayNumber = [1,2,3,4,5,6,7,8,9,10];
// function GreaterThan5(arrayNumber){
//     var result =  [];
//     for (const element of arrayNumber) {
//         if(element > 5){
//             result.push(element);
//         }
//     }
// }
// // console.log(GreaterThan5(arrayNumber));
// console.log(arrayNumber.filter((element)=> element > 5)); //predicate, handler, callbackfn

// console.log(arrayNumber.map((element)=>{
//     if(element % 2 == 0)
//         return "Chẵn";
//     else
//         return "Lẽ";
// }));

// function sum(arrayNumber){
//     var sum = 0;
//     for (const element of arrayNumber) {
//         sum += element;
//     }
//     return sum;
// }
// console.log(arrayNumber.reduce((sum, element) =>{
//     return sum += element;
// }));
// console.log(arrayNumber.reduce((avg, element) =>{
//     return avg += element/arrayNumber.length;
// }));

// console.log(arrayNumber.some((element) =>{
//     return element > 10; //false  (kiểm tra có phần tử nào thỏa mãn điều kiên)
// }));
// console.log(arrayNumber.every((element) =>{
//     return element > 0; //true (kiểm tra tất cả phần tử có thỏa mãn điều kiên)
// }));

// //bài tập kiểm tra
// // Phạm Văn Bảo - 2011064338  
// //Đề bài:
// var students = [{
//     MSSV:"1",
//     Name:"Name1",
//     Score1:10,
//     Score2:6
// },{
//     MSSV:"2",
//     Name:"Name2",
//     Score1:5,
//     Score2:8
// },{
//     MSSV:"3",
//     Name:"Name3",
//     Score1:3,
//     Score2:4
// },{
//     MSSV:"4",
//     Name:"Name4",
//     Score1:7,
//     Score2:2
// }]

// // a) Sử dụng filter để lọc ra các sinh viên có cả 2 điểm lớn hơn 4:
// var filterStudents = students.filter((student) => student.Score1 > 4 && student.Score2 > 4);
// console.log("Các sinh viên có cả 2 điểm lớn hơn 4:", filterStudents);

// // b) Sử dụng map để in ra xếp loại của sinh viên:
// var xeploai = students.map((student) => {
//     var TBC = (student.Score1 + student.Score2) / 2;
//     if (TBC >= 8) {
//         return "Giỏi";
//     } else if (TBC >= 6) {
//         return "Khá";
//     } else if (TBC >= 4) {
//         return "Trung bình";
//     } else {
//         return "Rớt";
//     }
// });
// console.log("Xếp loại của sinh viên:", xeploai);

// // c) Sử dụng reduce để tính TBC điểm của các sinh viên:
// var diemTrungBinhAll = students.reduce((avg, student) => {
//     return avg += ((student.Score1 + student.Score2 ) / 2) / students.length;
// }, 0);

// console.log("Trung bình cộng điểm của các sinh viên:", diemTrungBinhAll);

// // d) Kiểm tra xem trong mảng có ai rớt môn hay không:
// var checkRotMon = students.some((student) => student.Score1 < 4 || student.Score2 < 4);
// console.log("Có sinh viên nào rớt môn không?", checkRotMon);

// // e) Kiểm tra xem tất cả các sinh viên trong lớp có qua môn hay không:
// var checkCaLop = students.every((student) => student.Score1 >= 4 && student.Score2 >= 4);
// console.log("Tất cả sinh viên trong lớp có qua môn không?", checkCaLop);


setTimeout(()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                setTimeout(()=>{
                    console.log("Bảo");
                },3000);
                console.log("Bảo");
            },3000);
            console.log("Bảo");
        },3000);
        console.log("Bảo");
    },3000);
    console.log("Bảo");
},3000);

function ReadData(onSuccess, onFail){
    var a;
    setTimeout(()=>{
        a = { id: 10};
    },1000);
    if(a)
        onSuccess();
    else
        onFail();
}
ReadData((data)=>{
    console.log(data);
}, ()=>{
    console.log({error: "404"})
})