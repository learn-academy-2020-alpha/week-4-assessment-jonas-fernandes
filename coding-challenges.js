// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."


var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

const shuffle = (array) =>{
    array.sort(() => Math.random() - 0.5)
}

const rmvShfl = (newArr) => {
    let array = newArr.shift()
    shuffle(newArr)
        if(array==undefined) array = "The array is empty."
        return newArr
}



console.log(rmvShfl(collections))
console.log(rmvShfl(collections))
console.log(rmvShfl(collections))
console.log(rmvShfl(collections))
console.log(rmvShfl(collections))


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.



var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


const sumCubed = (array) =>{
    let result = [];
    for(let i=0; i < array.length; i++) {
    result.push(array[i] ** 3 );
    }
        return result.reduce((a, b) => a + b, 0);
}
console.log(sumCubed(cubeAndSum1))
console.log(sumCubed(cubeAndSum2))


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.





var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const minMax = (arr) =>{
    let result = [];
    result.push(Math.min.apply(Math, arr), Math.max.apply(Math,arr));
    return result
}
console.log(minMax(nums1))
console.log(minMax(nums2))


// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.



var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const capT = (str) =>{
     let result = "";
     for (i=0; i < str.length; i++) {
         result += (i+1) % 2 == 0 ? str.charAt(i).toUpperCase() : str.charAt(i);
  }

     return result
}

 console.log(capT(testString1))
 console.log(capT(testString2))

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.


var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
const integrate = (array1, array2) =>{
    let array = [...array1,...array2];
    return array.filter((a, b) => array.indexOf(a) === b)
}

console.log(integrate(arr1, arr2))