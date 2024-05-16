"use strict";
//==========================================OBJECT============================================================
//--------------------------------------Access the value--------------------------------------------------------
let student = {
    name: "Sana",
    rollNo: 12345,
    std_Id: "abc456"
};
console.log(student.std_Id);
//-----------OR----------------
let myScooty = {
    brand: "Metro E-vehicle",
    model: 2024,
    variant: "100cc",
    speed: () => {
        return "max.speed is 250km/hrs";
    }
};
console.log(myScooty.model);
myScooty.variant = "200cc"; //update variant
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
    }
];
console.log(Students[2].name);
const saba = "0213-123456";
const sabe2 = "0300-12345";
console.log();
const students = "Nimra";
const teacher = "Yusra";
console.log();
const rollNo = "45678";
const number = +92 - 36789156;
