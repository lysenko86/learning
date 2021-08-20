// ----------------------------------------------------------- //
// ------------------- Імперативний підхід ------------------- //
// ----------------------------------------------------------- //

// Оновлення стрінги часу кожну секунду
/*setInterval(logClockTime, 1000);

function logClockTime() {
    // Отримання стрінги часу в форматі hh:mm:ss tt
    var time = getClockTime();

    // Очистка консолі і вивід часу
    console.clear();
    console.log(time);
}

function getClockTime() {
    // Отримання актуального часу
    var date = new Date();
    var time = '';

    // Формування послідовності показу часу
    var time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: 'AM'
    };

    // Формування AM/PM
    if (time.hours == 12) {
        time.ampm = 'PM';
    } else if (time.hours > 12) {
        time.ampm = 'PM';
        time.hours -= 12;
    }

    // Додавання 0 до годин
    if (time.hours < 10) {
        time.hours = '0' + time.hours;
    }

    // Додавання 0 до хвилин
    if (time.minutes < 10) {
        time.minutes = '0' + time.minutes;
    }

    // Додавання 0 до секунд
    if (time.seconds < 10) {
        time.seconds = '0' + time.seconds;
    }

    // Формування готової стрінги часу в форматі hh:mm:ss tt
    return time.hours + ':' + time.minutes + ':' + time.seconds + ' ' + time.ampm;
}*/



// ------------------------------------------------------------- //
// ------------------- Функціональний підхід ------------------- //
// ------------------------------------------------------------- //

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
});

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? 'PM' : 'AM'
})

const display = target => time => target(time);

const formatClock = format => time => format.replace('hh', time.hours)
                                            .replace('mm', time.minutes)
                                            .replace('ss', time.seconds)
                                            .replace('tt', time.ampm);

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ? '0' + clockTime[key] : clockTime[key]
});

const compose = (...fns) =>
    (args) =>
        fns.reduce((composed, f) =>
            f(composed), args);

const convertToCivilianTime = clockTime => compose(appendAMPM, civilianHours)(clockTime);

const doubleDigits = civilianTime => compose(
    prependZero('hours'),
    prependZero('minutes'),
    prependZero('seconds')
)(civilianTime);

const startTicking = () => setInterval(compose(
    clear,
    getCurrentTime,
    serializeClockTime,
    convertToCivilianTime,
    doubleDigits,
    formatClock('hh:mm:ss tt'),
    display(log)
), oneSecond());

startTicking();
