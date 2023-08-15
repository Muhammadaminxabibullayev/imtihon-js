const API_BASE = "https://api.escuelajs.co/api/v1"; 
const PRODUCT_ID = +window.location.hash.replace("#", "");



(async () => {
    try{
        let response = await fetch (API_BASE + "/products/" + PRODUCT_ID)
        let singleProductData = await response.json()
    if(singleProductData) {
        proImg.src = singleProductData.images [0]
        proTitle.innerHTML = singleProductData.title
        proDesc.innerHTML = singleProductData.description 
        proPrice.innerHTML = singleProductData.price + "₽"
        del.innerHTML = singleProductData.price + 300
        
    }
    }catch(error) {
        console.error(error);
    }
})()