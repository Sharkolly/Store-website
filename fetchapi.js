const myFetch = fetch("https://fakestoreapi.com/products").then((myJson) => {
    myJson.json().then((values) => {
        let data = '';
        console.log(values);
        values.map((values) => {
            data += `<div class="border-container">
            <div class="title"><h1>${values.title}</h1></div>
            <div class="img">
                <img src= ${values.image} alt="">
            </div>
    
            <div class="description">
                <p>Description: ${values.description}</p>
            </div>
    
            <div class="category">
                <h2>Category: ${values.category}</h2>
            </div>
    
            <div class="price">
                <h2>Price: $${values.price}</h2>
            </div>
        </div>`

        })
        document.querySelector(".container").innerHTML = data;

    })

})


const myObj = {
    name: 'fola',
    prop: [
        "name", "age", "height"
    ],  
    age: 11,
    level: 100
}
sessionStorage.setItem("myAge", JSON.stringify(myObj));


const agePart = JSON.parse(sessionStorage.getItem("myAge"));

console.log(agePart);

const myP = document.createElement("p");
setInterval(() => {
    const myDate = new Date();
    const hr = myDate.getHours();
    const min = myDate.getMinutes();
    const date = myDate.getDate();
    const day = myDate.getDay();
    const dayy = myDate.getUTCDay();
    const sec = myDate.getSeconds();

    myP.textContent = `${hr} hours and ${min} minutes ${sec} seconds`;
    myP.style.color = 'white';
    myP.style.textAlign = 'center'

    document.body.appendChild(myP);
}, 1000);

document.write("Hello");
