//alert('Hello JavaScript!');
// let, const, var (зараз майже не використовується, але є ще у старих сайтах)
let message = 'Hello world';
alert(message);

message = 'Nice to se you';
alert(message);

let num = 35;
num = num + 2;
alert(num);

//const age = prompt('enter your age'); //prompt завжди повертає текст
//не можна міняти як let, num
// const nextAge = age + 1;
// alert(nextAge);

const age = Number (prompt('enter your age')); //треба додати
//не можна міняти як let, num
const nextAge = add(age, 1); //-, /, *, %
alert(nextAge);
//alert(16 % 15); //залишок від ділення

if (age < 19) { // <= === (дорівнює) !== (не дорівнює) && (i) || (або)
    alert('You are too young');
} else {
    alert('You are adult')
}
//тернарний оператор
// const textMessage = age < 19 ? 'You' : 'You';
// alert(textMessage);

// if (age < 19) { 
//     alert('You are too young');
// } else if (age < 60) {
//     alert('You are adult')
// } else {
//     alert('You are old')
// }

function add(a, b) {
    const result = a + b;
    return result;
}