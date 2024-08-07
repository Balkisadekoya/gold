// fetch is a window object
// fetch is use to perform a request
// fetch method returns a promise
// the promise is either fulfilled or rejected


const apiUrl = "https://fakestoreapi.com/products"
fetch(apiUrl)
.then((response) => {
    // console.log(response.json());
    return response.json();
})
.then((fetchedData) => {
    console.log(fetchedData);

    let shoppingData = "";
    fetchedData.map((singleData) => {
        shoppingData += `
        <div class="contain">
           <img src=${singleData.image} alt="" class="image">
           <h4 class="tit">${singleData.title}</h4>
           <p class="des">${singleData.description}</p>
           <p class="cat">${singleData.category}</p>
           <div class="rate">
              <p>${singleData.price}</p>
              <p>${singleData.rating.rate} - ${singleData.rating.count}</p>
           </div>
      </div>
      `
    })
    document.getElementById("shopping-container").innerHTML = shoppingData;

}).catch((error) => {
    console.log(error);
})