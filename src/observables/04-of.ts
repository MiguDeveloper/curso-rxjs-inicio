// Creamos un observable
import { Observer, of } from 'rxjs';

// Creamo un observer
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado:')
}

//const obser$ = of(1,2,3,4,5,6,7);
//const obser$ = of(...[1,2,3,4,5,6,7]);
const obser$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve(true));

obser$.subscribe(
    next => console.log('next: ', next),
    null,
    () => console.log('Terminamos la secuencia')
);

