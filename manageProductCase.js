let productOne = [
    new ProductCase("Coctail cake",650.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13021_coctail-cake.jpg","****"),
    new ProductCase("Raiboư cake",580.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13020_rainbow-cake.jpg","*****"),
    new ProductCase("Orange cake",550.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13016_orange-cake.jpg","*****"),
    new ProductCase("Gấu Nâu",550.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/gau-bong/13617_gau-ao-gau-nau.jpg","*****"),
    new ProductCase("Propose hear2",735.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13015_propose-heart-2.jpg","*****"),
    new ProductCase("Chó Shiba mặt cười",735.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/gau-bong/7297_cho-shiba-mat-cuoi.jpg","*****"),
    new ProductCase("Sweet cake",450.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13014_sweet-cake-1.jpg","*****"),
    new ProductCase("Propose",530.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/8454_propose-heart-1.jpg","*****"),
    new ProductCase("Ganache",460.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/8453_ganache-1.jpg","*****"),
    new ProductCase("Hoa tươi",560.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-lan/8034_brave.jpg","*****"),
    new ProductCase("Magic",560.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/8433_magic-4.jpg","*****"),
    new ProductCase("Coctail cake",650.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13021_coctail-cake.jpg","****"),
    new ProductCase("Raiboư cake",580.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13020_rainbow-cake.jpg","*****"),
    new ProductCase("Orange cake",550.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13016_orange-cake.jpg","*****"),
    new ProductCase("Propose hear2",735.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13015_propose-heart-2.jpg","*****"),
    new ProductCase("Sweet cake",450.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/13014_sweet-cake-1.jpg","*****"),
    new ProductCase("Propose",530.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/8454_propose-heart-1.jpg","*****"),
    new ProductCase("Ganache",460.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/8453_ganache-1.jpg","*****"),
    new ProductCase("Magic",560.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/banh-kem-tous-les-jours/8433_magic-4.jpg","*****"),
    new ProductCase("Gấu xanh áo trắng",900.000,1,"https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/gau-bong/11707_gau-ao-tim-xanh.jpg","*****"),
];

// Hàm này duyệt lặp sản phẩm hiển thị ra HTML
function allshowProduct() {
let showramanhinh = "";
    for (let j = 0; j < productOne.length; j++ ) {
        showramanhinh+= `<div class="abc">
                              <img src="${productOne[j].img}"/>
                              <p>${productOne[j].name}</p>
                              <p>${productOne[j].description}</p>
                              <p>$${productOne[j].price}</p>
                              <button class="button1" onclick='addElementbyIndex(${j})'>Thêm vào giỏ hàng</button>
                         </div>`
    }
    document.getElementById("showproduchere").innerHTML = showramanhinh;
}
allshowProduct()

//___________________________________________________________________________________________
let cart = [];      //Biến chứa mảng
let total = 0;
let totalcart = 0;
//Hàm tính số lượng hiển thị ở đầu trang
function addElementbyIndex(index){
    let product = productOne[index]
    cart.push(productOne[index])
    total = total + Number(parseInt(product.price))
    totalcart = totalcart + Number(parseInt(product.quantity))
    alert("Bạn vừa thêm 1 sản phẩm")
    document.getElementById("totallink").innerText = total;
    document.getElementById("totalcartlink").innerText = totalcart;
}

// --------------Hiển thị phần giỏ hàng---------------
function showCart() {        // Duyệt sản phẩm vừa thêm vào giỏ hàng
    let totalquantity = 0;
    let totalprice = 0;
    let showCartto = "";
    for(let i = 0; i  < cart.length; i++) {
        totalquantity = totalquantity + Number(parseInt(cart[i].quantity))
        totalprice = totalprice + Number(parseInt(cart[i].price))
        showCartto += ` <tr></tr><div class="abc">
                       <td> <img class="img3" src="${cart[i].img}"/></td>
                       <td><p>${cart[i].name}</p></td> 
                        <td><p>$${cart[i].price}</p></td>
                        
                        <td><button onclick='deleteCart("+i+")'>Xóa sản phẩm</button></td>
                        </div></tr>
`
    }
    document.getElementById("showcart").innerHTML = showCartto;
    document.getElementById("showtotalprice").innerHTML = totalprice;
    document.getElementById("showtotalquantity").innerHTML = totalquantity;
}
showCart()//gọi hàm
function deleteCart(index){//xóa sản phẩm ở giỏ hàng
    cart.splice(index, 1)
    showCart()
}

