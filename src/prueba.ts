import { leerTeclado } from '../view/entradaTeclado'
const prueba = async () => {
    let n: string
    n =  await leerTeclado('nombre: ') 
    console.log(`Tu nombre es ${n}`)
}

const prueba2 = async () => {
    await prueba()
    let n: number
    n =  parseInt (await leerTeclado('Edad: '))
    if (n == 18){
        console.log(`Eres mayor de edad por tener ${n} años`)
    } if (n > 18){
        console.log(`Eres mayor de edad por tener ${n} años`)
    } if (n < 18){
        console.log(`Eres menor de edad por tener ${n} años`)
    }
}

prueba2()
