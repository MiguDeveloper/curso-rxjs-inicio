// Creamos un observable
import { Observer, fromEvent } from 'rxjs';

// Creamo un observer
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado:')
}

/**
 * Eventos del DOM
 */

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

/* sin desustructuracion
src1$.subscribe(ev => {
    console.log(ev.x);
    console.log(ev.y)
});
*/

// Haciendo uso de desustructuracion
src1$.subscribe(({x,y})=>{
    console.log(x, y);
})

src2$.subscribe(evento => {
    console.log(evento.key);
});