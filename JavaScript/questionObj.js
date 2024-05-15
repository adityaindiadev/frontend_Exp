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

console.log(output);