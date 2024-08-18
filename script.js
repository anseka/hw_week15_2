
let list = document.querySelector('#list')

let numbers = [];

let element = -10;
while (element <=10) {
    numbers.push(element);
    element++;
}

let currentArray = [...numbers];

list.innerHTML = `<p>Исходный массив: ${currentArray.join(', ')}</p>`;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        numbers.splice(i, i + 1);
        i--;
    }
}

let arrayWithoutNegative = [...numbers];

list.innerHTML += `<p>Без отрицательных цифр: ${arrayWithoutNegative.join(', ')}</p>`;

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i]**2;
}

let square = [...numbers];
list.innerHTML += `<p>Каждый элемент возведен в квадрат: ${square.join(', ')}</p>`;

for (let i = 1; i < numbers.length; i++) {
    let key = numbers[i];
    let j = i - 1;
    while (j >= 0 && numbers[j] < key) {
        numbers[j + 1] = numbers[j];
        j = j - 1;
        }
    numbers[j + 1] = key;
    }

list.innerHTML += `<p>Отсортированный по убыванию: ${numbers.join(', ')}</p>`;

console.log(numbers);