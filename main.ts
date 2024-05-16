//==========================================OBJECT============================================================
//--------------------------------------Access the value--------------------------------------------------------
let student = {
    name: "Sana",
    rollNo: 12345,
    std_Id: "abc456"
}
console.log(student.std_Id);

//-----------OR----------------
let myScooty = {
    brand: "Metro E-vehicle",
    model: 2024,
    variant: "100cc",

    speed: () => {
        return "max.speed is 250km/hrs"
    }
}
console.log(myScooty.model);
myScooty.variant = "200cc"   //update variant
console.log(myScooty.variant);

//-------------------------------------multiple data in an array-----------------------------------------------
let Students = [
    {
        name: "Kainat",
        Email: "kainat123@yahoo.com",
    },
    {
        name: "Sanaya",
        Email: "sanayaask@gmail.com"
    },
    {
        name: "sara",
        Email: "sara6789@yahoo.com",

    }]
console.log(Students[2].name);

//--------------------------type alies(features of typescript)-----------------------------------------------

type SabaMoti = string
type SabaGori = string

const saba: SabaMoti = "0213-123456"
const sabe2: SabaGori = "0300-12345"
console.log();

//------------------------------------------
type Student = string
type Teacher = string

const students: Student = "Nimra"
const teacher: Teacher = "Yusra"
console.log();
//----------------------------------------

type RollNo = string
type Numbers = number

const rollNo: RollNo = "45678"
const number: Numbers = +92 - 36789156
