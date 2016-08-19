// <h1> Shop B&M </h1>
//
// <div class="col-sm-6 col-md-4">
//     <div class="thumbnail">
//         <img src="img/lifestyle/d'blanc_by_pierrot_68-DRK_2.jpg" />
//         <div class="caption">
//             <h3>Product 2</h3>
//             <ul>
//                 <li> Category </li>
//                 <li> Price </li>
//                 <li> Selling Points </li>
//             </ul>
//         </div>
//     </div>
// </div>
////////////////////////////////////////////////////////////////////////////////////
// var products = {
// shorts: [
// {
// id: "shorts_1",
// name: "Fine Point Sofa Surfer",
// category: "shorts",
// price: 59.95,
// picture_url: "img/product/blue-FINN-shorts.jpg",
// selling_points: ["Tether Waist", "Comfy", "Athletic Fleece", "Cotton Stretch Waistband"]
// },
// <li>
//     <a href="#" id="bottomsMain">Sunglasses</a>
// </li>
// <li role="separator" id="shirtsMain"class="divider"></li>
// <li>
//     <a href="#">Shirts</a>
// </li>
// <li role="separator" class="divider"></li>
// <li>
//     <a href="#" id="sunglassesMain">Bottoms</a>
// </li>
var bottomsLoaded = false
var shirtsLoaded = false
var sunglassesLoaded = false
$('#bottomsMain').on('click', function(){
  $('.product').css('display','none')
  $('.mainPage').css('display','none')
  if(!bottomsLoaded){
    shopShorts()
    bottomsLoaded = true

  } else {
    $('.shorts').css('display','block')

  }
})
$('#shirtsMain').on('click', function(){
  $('.product').css('display','none')
  $('.mainPage').css('display','none')
  if(!shirtsLoaded){
    shopShirts()
    shirtsLoaded = true

  } else {
    $('.shirts').css('display','block')
  }
})
$('#sunglassesMain').on('click', function(){
  $('.product').css('display','none')
  $('.mainPage').css('display','none')
  if(!sunglassesLoaded){
    shopSunglasses()
    sunglassesLoaded = true

  } else {
    $('.sunglasses').css('display','block')

  }
})
$('#home, .about').on('click', function(){
  $('.product').css('display','none')
  $('.mainPage').css('display','block')
})
$('.shopAll').on('click', shopAll)


function shopProduct(name, category, price, picture, arr) {
    var content = $('content');
    var product = $('<div>', {class: "col-sm-6 col-md-4 product"});
      product.addClass(category)
    var thumbnail = $('<div>', {class: "thumbnail"});
    var img = $('<img>');
    var caption = $('<div>', {class: 'caption'});
    var productTitle = $('<h3>');
    var productDetails = $('<ul>');

    img.attr('src', picture)
    productTitle.text(name)
    productDetails
        .append('<li>' + price + '</li>')
        .append('<li>' + category + '</li>')
        .append('<li>' + arr.join(', ') + '</li>')

    caption.append(productTitle, productDetails)
    thumbnail.append(img, caption)
    product.append(thumbnail)
    content.append(product)
}


function shopShorts(){
      _.each(products.shorts, function(product){
        console.log(product)
        shopProduct(product.name, product.category, product.price,product.picture_url,
          product.selling_points)

      })
    }

function shopShirts(){
    _.each(products.shirts, function(product){
        console.log(product)
        shopProduct(product.name, product.category, product.price,product.picture_url,
          product.selling_points)

      })
}

function shopSunglasses(){
  _.each(products.sunglasses, function(product){
        console.log(product)
        shopProduct(product.name, product.category, product.price,product.picture_url,
          product.selling_points)

      })
}
function shopAll(){
  $('.products').css('display','block')
  $('.mainPage').css('display','none')
  if(!shirtsLoaded){
    shopShirts()
    shirtsLoaded = true

  } else {
    $('.shirts').css('display','block')
  }
  if(!bottomsLoaded){
    shopShorts()
    bottomsLoaded = true

  } else {
    $('.shorts').css('display','block')

  }
  if(!sunglassesLoaded){
    shopSunglasses()
    sunglassesLoaded = true

  } else {
    $('.sunglasses').css('display','block')

  }

}
