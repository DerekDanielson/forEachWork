const colors = ['teal','lime','pink','purple'];

colors.forEach(function(val) {
    console.log(val.toUpperCase());
});


//Displays the total of all "prices"
const prices = [ 30.99, 69.99, 10, 99.99];
let total = 0;
prices.forEach(function(price) {
    total += price; 
});
console.log(total);



//forEach Exercise
const myForEach = [4,5,6];
myForEach.forEach(function(val) {
    console.log(val);
});

//Colt's forEach Exercise Example
function forEach(arr, callback) {
    for(let i = 0; i < arr.lenght; i++) {
        callback(arr[i]);
    }
}

forEach(colors, function(color) {
    console.log(color.toUpperCase());
});