/*
	source: https://youtu.be/7TpAN4FISeI?t=2807
*/

console.log('START');



const p1 = Promise.resolve(1);
const p2 = Promise.reject('my error');
const p3 = Promise.resolve(3);

// метод .all() повертає один проміс, який виконується коли, виконаються усі проміси,
// передані масивом в параметрах, якщо хоча б один вертає reject - то загальний проміс теж
// реджектиться і ми це ловимо в блоці catch
(async () => {
	const result = await Promise.all([p1, p2, p3]).catch(err => console.log(err));
	console.log('result', result);
})();
// на виході мало би бути масив з результатів промісів [1, my error, 3], але в нас
// другий проміс реджектить все, тому результатом буде undefined


// новий метод .allSettled() в будь-якому випадку дочекається виконання всіх
// промісів не дивлячись на результат а також в будь-якому випадку поверне масив
// об'єктів результатів, в кожному з яких буде
// поле status = fulfilled/rejected
// і сам результат в полі value або помилка в полі reason для кожного зареджектеного проміса
(async () => {
	const result = await Promise.allSettled([p1, p2, p3]);
	console.log('result 2', result);
})();
