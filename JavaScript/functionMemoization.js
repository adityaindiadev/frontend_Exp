let memoObj = {}

function addNumbers() {

    let memoStr = [...arguments].join('_')

    console.log(memoStr);

    if (memoObj[memoStr]) {

        console.log("hit");
        return memoObj[memoStr]
    }

    console.log("miss");

    const sumOfAllTheNumbers = [...arguments].reduce((acc, item) => {


        return acc + item
    })

    memoObj[memoStr] = sumOfAllTheNumbers

    return sumOfAllTheNumbers


}


console.log(addNumbers(2, 4, 10, 11))
// console.log(addNumbers(2, 4, 10, 11))
console.log(addNumbers(2, 4))
console.log(addNumbers(2, 44))
console.log(addNumbers(2, 4,4))
console.log(addNumbers(2, 44))