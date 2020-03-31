// Creamos un observable
import { Observer, interval, timer } from 'rxjs';

// Creamo un observer
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado:')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

// El interval y el timer recordar siempre que son asincronos por naturaleza
//const interval$ = interval(1000);
const timer$ = timer(hoyEn5);

console.log('inicio');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');