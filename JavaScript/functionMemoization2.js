function add() {
    const sumOfAllTheNumbers = [...arguments].reduce((acc, item) => {


        return acc + item
    })

    return sumOfAllTheNumbers

}

let memoObj = {}

function memoizeOne(func) {

    return function () {

        // let memoStr = [...arguments].join('_')
        let memoStr = JSON.stringify(arguments)

        console.log(memoStr);

        if (memoObj[memoStr]) {

            console.log("hit");
            return memoObj[memoStr]
        }

        console.log("miss");

        

        const sumOfAllTheNumbers = func(...arguments)

        memoObj[memoStr] = sumOfAllTheNumbers

        return sumOfAllTheNumbers
    }
}

const memoizeAdd = memoizeOne(add)

console.log(memoizeAdd(2, 3))
console.log(memoizeAdd(2, 3))
console.log(memoizeAdd(2, 3, 3))
console.log(memoizeAdd(2, 33))
console.log(memoizeAdd(2, 3, 3))
console.log("memoObj", memoObj);