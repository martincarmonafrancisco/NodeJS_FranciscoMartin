import {menuPral} from '../view/menuPral'
import { leerTeclado } from '../view/entradaTeclado'

const main = async () => {
    let n: number
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log("Estoy en opción 1")
                break
            case 2:
                console.log("Estoy en opción 2")
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
//Calculadora

const sumar = async () => {
    await main()
    let n1: number
    let n2: number
    n1 =  parseInt( await leerTeclado('Dame un número')) 
    n2 =  parseInt( await leerTeclado('Dame otro número'))
    console.log(`La suma es ${n1 + n2}`)
}
sumar()

const multiplicar = async () => {
    await sumar()
    let n3: number
    let n4: number
    n3 =  parseInt( await leerTeclado('Dame un número')) 
    n4 =  parseInt( await leerTeclado('Dame otro número'))
    console.log(`La multiplicación es ${n3 * n4}`)
}
multiplicar()

/*
const lee = async () => {
    let n: string
    n = await leerTeclado('nombre: ')
    return n
}

import { leerTeclado } from '../view/entradaTeclado'
let nombre: string
lee()
*/

