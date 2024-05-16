const arr = [1, 2, 3, [4, [5, 6]], 7, 8]

let flatArray = []

function flattenArr(array = []) {


    array.forEach((elem) => {

        if (Array.isArray(elem)) {

            flattenArr(elem)

        }
        else {
            flatArray.push(elem)
        }

    })

}


flattenArr(arr)

console.log(flatArray);