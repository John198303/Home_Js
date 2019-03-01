var basket_price = 0;

var basket = [
	{name: 'Кофта', price: 760, color: 'Зеленый', size: 'XXL', quantity: 2},
	{name: 'Джемпер', price: 535, color: 'Красный', size: 'M', quantity: 5},
	{name: 'Джинсы', price: 1954, color: 'Синий', size: 'L', quantity: 7}
];


function countBasketPrice() {
    for (var i = 0; i < basket.length; i++) {
        basket_price += basket[i].price * basket[i].quantity;
    }
    return basket_price;
}

document.write('<h3>В корзине:</h3>');
for (i = 0; i < basket.length; i++) {
    document.write(basket[i].name + ' — '
	+ basket[i].price + ' руб</br>'
	+ 'Размер: ' + basket[i].size + '</br>'
	+ 'Количество: ' + basket[i].quantity + '</br>'
	+ 'Цвет: ' + basket[i].color + '</br></br>');
}
document.write('</br><b>Стоимость заказа: ' + countBasketPrice(basket) + ' Руб.</b>');

// Дмитрий, с write всё получается. с InnerHTML ничего не выводится, запутался.





