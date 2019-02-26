
//Первое задание

var input = (+prompt('Введите число от 0 до 999'));


function getNumber(i) { 
    if ((i >= 0) && (i <= 999)) {
      var hundreds = Math.floor(i / 100);
      var dozens = Math.floor((i - 100 * hundreds) / 10);
      var units = (i - (100 * hundreds + 10 * dozens));
      var numbers = {
            'Единицы': units,
            'Десятки': dozens,
            'Сотни': hundreds
        };      
       
    } else {
        alert('Пустой объект');
    }
	var result = i + '\n';
    for (var num in numbers) {
        result += (num + ': ' + numbers[num] + '\n');
    }
    alert(result);
}

getNumber(input);


// Второе задание


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


// Третье задание

var product = [
	size: {
		width: null,
		height: null,	
		
		},
	color: null,
	price: null,
	quantity: null,
	
],




