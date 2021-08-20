const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => (request.status === 200) ?
        resolves(JSON.parse(request.response).results) :
        rejects(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
});

getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(new Error('Cannot load members from randomuser.me'))
);


// -----------------------------
/*
const promise = new Promise(function(resolve, reject) {
    // Делаем, что-то, возможно асинхронное, тогда…
    if (true) { // Всё прошло отлично
        resolve('Сработало!');
    } else {
        reject(Error('Сломалось'));
    }
});

promise.then(function(result) {
    console.log('Промис сработал');
}, function(err) {
    console.log('Что-то сломалось');
});
*/
