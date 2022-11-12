


const dataset = require("./databaseModule");

const born = 2000;


async function handleAge() {
    return await JSON.parse(dataset);
}

handleAge()
    .then(res => {
       return res.profile.description.replace("age", () => new Date().getFullYear() - born)
    })
    .catch((error) => {
        console.warn("Oooops!! Algo aconteceu!")
    })



// module.exports = newDataset;