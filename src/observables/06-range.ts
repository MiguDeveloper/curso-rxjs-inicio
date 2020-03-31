// Creamos un observable
import { Observer, range, asyncScheduler } from 'rxjs';

// Creamo un observer
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado:')
}

// const src$ = of(1,2,3,4,5);
// el asyncScheduler convierte el bloque del range en asincrono
const src$ = range(1,5, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');