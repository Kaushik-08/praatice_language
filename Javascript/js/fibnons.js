
let fibonacci = parseInt(prompt("Enter the number"));
let fib1 = 0, fib2 = 1, nextTerm;
document.write("Hello iam fibonacci");
document.write("<br>");
document.write("The fibonacci are:");
for (let a = 0; a< fibonacci; a++){
document.write("<br>");
document.write(fib1);
nextTerm= fib1+fib2;
fib1=fib2;
fib2=nextTerm;
}
