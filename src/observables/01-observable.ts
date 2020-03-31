// Creamos un observable
import {Observable, Observer} from 'rxjs';

// Creamo un observer
const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('completado [obs]')
}

// const obs$ = Observable.create();
// usamos el estandar para nombrar los observables usando '$' como sufijo
// es importante indicar que tipo de informacion va a fluir por el observable no dejarlo nunca como un
// <unknown>
const obs$ = new Observable<string>(subs => {
    subs.next('Hola'); // con .next() emitimos un valor a todos los subscriptores
    subs.next('mundo');

    // Emitimos un error de prueba forzado para ejecutar el error
    // const a = undefined;
    // a.nombre = 'Miguel';

    subs.complete(); // Aqui cerramos la subscripcion y ya no muestra la info de abajo

    subs.next('Hola 2');
    subs.next('mundo 2');
});

// Para ejecutar un observable tenemos que tener como minimo un subcriptor
obs$.subscribe(resp => console.log(resp));

// Podemos tambien subscribirnos y esperamos los 3 callbacks
obs$.subscribe(
    valor => console.log('next: ' + valor),
    error => console.warn('error: ' + error),
    () => console.info('Completado')
)

obs$.subscribe(observer);