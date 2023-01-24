//1

function food(humburger, fries){
    const people = 4;
    if (humburger >= people && fries >= 1) {
        return 'Ми поїли';
    } else {
        return 'Ми йдемо в інше кафе';
    }
}
console.log(food(5, 2));

//2

function Price(price){
        if (price >= 1000 && price <= 1900) {
            return true;
        } else {
            return false;
        }
}
console.log(Price(1899));

//3

function comparePrice(price2){
    if (!(price2 >= 1000 && price2 <= 1900)) {
        return true;
    } else {
        return false;
    }
}
console.log(comparePrice(1400));

function comparePrice(price3){
    if (price3 < 1000 || price3 > 1900) {
        return true;
    } else {
        return false;
    }
}
console.log(comparePrice(1400));

//4


function number(month){
if (month === 12 || month === 1 || month === 2) {
    return'zima';
        }
else if (month === 3 || month === 4 || month === 5) {
    return'vesna';
        }
else if (month === 6 || month === 7 || month === 8) {
    return'leto';
        }
else {
    return'osen';
        }
}
console.log(number(3));

 //5

 function Number1(a, b, c){

    if(a > b && a < c || a < b && a > c){
        return'среднее число A';
    } else if (b > a && b < c || b < a && b > c){
        return'среднее число B';
    } else {
        return'среднее число C';
    }
}
console.log(Number1(1, 2, 3));
 
 //6

 function Day(a){
    const monday = 1;
    const tuesday = 2;
    const wednsday = 3;
    const thursday = 4;
    const friday = 5;
    const saturday = 6;
    const sunday = 7;
    switch (a) {
        case monday:
            return 'пн'
            break;
        case tuesday: 
            return 'вт'
            break;
        case wednsday:
            return 'ср'
            break;
        case thursday:
            return 'чт'
            break;
        case friday: 
            return 'пт'
            break;
        case saturday:
            return 'сб'
            break;
        case sunday:
            return 'вс'
            break;
        default: 
            return 'Це не день тиждня'
            break; 
    }
 }
console.log(Day(2));
 

//7

function Param(x, y, sign){
    switch (sign) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '/':
            return x / y;
            break;
        case '*':
            return x * y;
            break;
    }
}
console.log(Param(1, 2, '*'));