//Lev1_1 intro function
console.log("Lev1_1 intro function");

function intro() {
    var a = 1 + 3;
    console.log("Hello World");
    console.log("1+3 = " + a);
}
intro();

//Lev1_2 intro function
console.log("Lev1_2 intro function");

function intro2(paramName) {
    let varName = "SuperCoder";
    console.log("Hi, " + varName + ". Mein Name ist " + paramName + " .");
}
intro2("Hase");

//Lev1_3 intro function
console.log("Lev1_3 intro function");

function intro3() {
    let Name = "Steff";
    let stadt = "Bayern";
    let alter = 30;
    console.log("Hallo, mein Name ist " + Name + " . Ich bin " + alter + " jahre alt. Ich komme aus " + stadt);
}
intro3();

//Lev1_3 math function
console.log("math function");

function math(a, b) {
    console.log(a * b);
    console.log(a / b);
}
math(30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);