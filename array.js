const reverse = function (arr) {
    let revArr = [];
    let index = 0;
    for (let i = arr.length-1 ; i >= 0; --i) {
        revArr[index] = arr[i];
        ++index;
    }
    return revArr;
};

let array = [1,2,3,4,5,6,7];
let array1 = reverse(array);
let x= '';
for ( let i = 0; i <array1.length; ++i) {
    if (i === array1.length-1){
        x += array1[i];
    } else {
        x += array1[i] + ',';
    }
}
console.log(x);