

// function sumOf(list) {
//     let result = 0;
//     for (let i = 0; i < list.length; i++) {
//         result += list[i]
//     }
//     return result;
// }

// console.log(sumOf([1, 2, 3, 4, 5, 6]))



// function sumOf(list) {
//     if (list.length === 1) {
//         return list[0]
//     }

//     return list[0] + sumOf(list.slice(1));
// }

// let lst = [2, 4, 6, 8, 10];
// console.log(sumOf(lst));



function filter(arr, predicate){
    // Base case
    if (!arr.length){
        return [];
    }
    if (predicate(arr[0])) {
        return [arr[0], ...filter(arr.slice(1), predicate)];
    }
    return filter(arr.slice(1), predicate);
};

const arr = [10,5,6,3,8];
console.log(filter(arr, x => x < 7));