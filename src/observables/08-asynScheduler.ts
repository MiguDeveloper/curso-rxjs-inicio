// Creamos un observable
import { Observer, asyncScheduler } from 'rxjs';

// Creamo un observer
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado:')
}

// const saludar = ()=> console.log('CTO Miguel');
const saludar2 = nombre => console.log(`Hola ${nombre}`);
// probamos con un setTimeOut
asyncScheduler.schedule(saludar2, 2000, 'Miguel');

// Ahora probamos con un setInterval
const subs$ = asyncScheduler.schedule(function name(state) {
    console.log(state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

/**
 * Podemos hacer el unsubscribe usando el setTimeout
 * pero no es el proposito asi que usaremo el asynschedule
 */
//setTimeout(() => {
    //subs$.unsubscribe();
//}, 6000);

asyncScheduler.schedule(()=> subs$.unsubscribe(), 6000);
