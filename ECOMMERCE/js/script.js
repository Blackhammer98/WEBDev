const productList=document.querySelector(".productList");

const loader = document.querySelector(".loader");

const searchField=document.querySelector("#search");

let allProducts;

searchField.addEventListener("input",(e)=>{
const search=e.target.value.toLowerCase();
const filteredProducts=allProducts.filter((product)=>{
  const title=product.title.toLowerCase();

  return title.startsWith(search);
})
    displayProducts(filteredProducts);

})

const clearProducts=()=>{
    productList.innerHTML="";
}

const displayHomePage =async( )=>{


    //hide the loader 
    loader.style.display = "none";


    const products = await fetchProducts();
    allProducts = products;
    displayProducts(products);
}

const displayProducts =  (products)=>{     
     clearProducts();
    


    products.forEach((productData)=>{

      const product = createProduct(productData);   
      productList.appendChild(product);
         
    })
        
    
}
function createProduct(productData){
    const product = document.createElement("div");
    product.className="product";
    const productImage=document.createElement("div");
    productImage.className="productImage"
    const productDetails = document.createElement("div");  
    productDetails.className="productDetails";

    const img   = document.createElement("img");
    img.setAttribute("src",productData.thumbnail  );
    img.setAttribute("height","100%");
    img.setAttribute("width","100%");
     productImage.appendChild(img);

     const h3 = document.createElement("h3");
     const p = document.createElement("p");
     const span = document.createElement("span");
     const h5 = document.createElement("h5");
     const btn =document.createElement("button");

     h3.innerText=productData.title;
     p.innerText=productData.description;
     span.innerText="Ratings"+ productData.rating;
     h5.innerText ="Price: ₹ " + productData.price;
     btn.innerText="Delete product";
     btn.className="btn";

     btn.onclick = ()=>onDeleteProduct(productData.id);

     
       
     


     productDetails.appendChild(h3);
     productDetails.appendChild(p);
     productDetails.appendChild(span);
     productDetails.appendChild(h5);
     productDetails.appendChild(btn);
     

     
    product.appendChild(productImage);
    product.appendChild(productDetails) ;
    
    return product;

}



const fetchProducts= async()=>{


    const response = await fetch("https://dummyjson.com/products");
    const productsJSON= await  response.json();

    return productsJSON.products;    
}

displayHomePage();

const onDeleteProduct=(id)=>{

    //backend API call to delete

  const filteredProducts=allProducts.filter((product)=>{
    return product.id!==id;
  })
   
   displayProducts(filteredProducts);
}