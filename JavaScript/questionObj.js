const obj = [
    {
        key: 'Sample 1',
        data: 'Data1'
    },
    {
        key: 'Sample 1',
        data: 'Data1'
    },
    {
        key: 'Sample 2',
        data: 'Data1'
    },
    {
        key: 'Sample 2',
        data: 'Data1'
    },
    {
        key: 'Sample 3',
        data: 'Data1'
    },
    {
        key: 'Sample 4',
        data: 'Data1'
    },
]


// output_should_be = {
//     'Sample 1': [
//         {
//             key: 'Sample 1',
//             data: 'Data1'
//         },
//         {
//             key: 'Sample 1',
//             data: 'Data1'
//         },
//         {
//             key: 'Sample 1',
//             data: 'Data1'
//         }
//     ],
//     'Sample 2':[]
// }

//My Solutions

let output = {}

obj.forEach((item) => {

    if (typeof output[item.key] == 'undefined')
        output[item.key] = []

    // output[item.key] = []
    output[item.key].push({
        key: item.key,
        data: item.data
    })
})

// console.log(output);




// Other Solution

let output2 = {}

obj.forEach((item)=>{

    if (output2[item.key]) {
        output2[item.key].push(item)
    }else{
        output2[item.key] = [item]
    }

})

// console.log(output2);


//one more another solutions

const output3 = obj.reduce((acc, item) => {
    if (acc[item.key]) {
        acc[item.key].push(item);
    } else {
        acc[item.key] = [item];
    }
    return acc;
}, {});

console.log(output3);