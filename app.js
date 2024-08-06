// fetch('https://dummyjson.com/products')
// .then(response=>response.json())
// .then(response=>console.log(response.products))





fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(response =>{
    for (var i = 0; i <=response.products.length; i++) {
        var data=response.products[i]
        console.log(data)


        var renderData=document.getElementById('renderData')

        renderData.innerHTML+=`
        <div class="card" style="width: 18rem;">
    <img style="width: 100%; height:180px;" src=${data.thumbnail} class="card-img-top" alt="..." >
    <div class="card-body">
    <h4 class="card-title">price $ ${data.price}</h4>
      <h5 class="card-title">${data.title}</h5>
      <p class="card-text">${data.
        description}</p>
    </div>
  </div>`

    }
    
})