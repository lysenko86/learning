// source: https://youtu.be/nyIpDs2DJ_c?t=2186
// source: https://www.youtube.com/watch?v=qrIuuJc2Zc8&list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa



function add(a: number = 5, b?: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

const createSkills = (name: string, ...skills: Array<string>): string => `${name}, my skills are ${skills.join()}`;

const createObject = (): object => ({});



// ----------
// Перегрузка ф-ції з різними параметрами
// ----------
interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWidthDefault extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionWidthDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }

    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() }
    }

    return { x: a, y: b }
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))
