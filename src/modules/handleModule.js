


const dataset = require("./databaseModule");



async function handleAge(){
    return await JSON.parse(dataset);
}

const test = handleAge().then(res => {
    return res
})


console.log(test)
// module.exports = newDataset;