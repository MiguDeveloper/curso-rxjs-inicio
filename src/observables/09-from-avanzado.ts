// Creamos un observable
import { Observer, of, from } from 'rxjs';

// Creamo un observer
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado:')
}

const obser$ = of([1, 2]);

obser$.subscribe(
    next => console.log('next: ', next),
    null,
    () => console.log('Terminamos la secuencia')
);

// El from siempre espera un arreglo para generar la secuencia
const source$ = from([1,2,3,4,5]);

source$.subscribe(observer);

// yield: emitir valores
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();
/*
for (let id of miIterable) {
    console.log(id);
}
*/
console.log('Usando from');

// Otra manera de hacerlo con from
from(miIterable).subscribe(observer);