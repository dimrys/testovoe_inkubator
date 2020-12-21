// 6. Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, 
// переданных этой функции через параметры

function superSum(a,b){
    let sum = a + b;
    window.alert(sum);
}



// 7. Создать массив из чисел в перемешку (не отсортированы). 
// С помощью цикла for найти максимальный и минимальный элементы в массиве


let myArr = [12, 28, -12, 5, 44, 3, 657, -321];
let minElementInArr = myArr[0];
let maxElementInArr = minElementInArr;
 for (let i = 1; i < myArr.length; i++){
     if (myArr[i] < minElementInArr){
         minElementInArr = myArr[i];
     }
     if (myArr[i] > maxElementInArr){
         maxElementInArr = myArr[i];
     }
 }

 window.alert('Max: ' + maxElementInArr + '\n' + 'Min: ' + minElementInArr);


// 8. Создать 2 переменные a и b… присвоить им любые значения. 
//  Потом программно поменять эти значения местами, не используя значения напрямую

let a = "333"; 
let b = "444";
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);


//9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax 
// (чтобы можно было передавать в неё любой массив чисел, 
// а на выходе она возвращала нам максимальное число из массива)


            //Первый вариант

function findMax(arr) {
    let maxElementInArr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElementInArr) {
            maxElementInArr = arr[i];
        }        
    }
    return maxElementInArr;
}


           //Второй вариант

function findMax2(arr){
    return Math.max.apply(null, arr)
}





