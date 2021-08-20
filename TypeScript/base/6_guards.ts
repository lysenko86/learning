// source: https://youtu.be/nyIpDs2DJ_c?t=3217
// Допоміжні фічі і конструкції для роботи з типами



// Параметри ф-ції різних типів
function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim()
}

// Належність об'єкту до різних класів
class MyResponse {
    header = 'response header'
    result = 'response result'
}
class MyError {
    header = 'error header'
    message = 'error message'
}
function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return { info: res.header + res.result }
    } else {
        return { info: res.header + res.message }
    }
}

// відсутність значення в типі даних
type AlertType = 'success' | 'danger' | 'warning'
function setAlertType(type: AlertType) {}
setAlertType('success')
setAlertType('warning')
// setAlertType('default') // Тут бачимо помилку, бо такого значення немає в типі AlertType
