// Первое задание








// третье задание

var basket_price = 0;
Basket = [{name:'Кофта', price:760}, {name:'Джемпер', price:535}];
Basket.push({name:'Свитер', price:150});
function countBasketPrice() {
    for (var i=0; i<Basket.length; i++) {
        basket_price +=  Basket[i].price;
    }
    return basket_price;
}
document.write('<h3>В корзине:</h3>');
for (i=0;i<Basket.length;i++){document.write(Basket[i].name + ' — ' + Basket[i].price +' руб</br>');}
document.write('</br><b>Стоимость заказа: '+countBasketPrice(Basket)+'</b>');






// Четвертое задание

for (var i =0; i <= 9; console.log(i++));




// Пятое задание
var x = 'x';
var concat = 'x' + 'x';

for (var i = 0; i < 20; i++) {

    if (x === 'x') console.log(x);
    x += concat;
    console.log(x);

}