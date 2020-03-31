// Creamos un observable
import { Observable, Observer, Subject } from 'rxjs';

// Creamo un observer
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado:')
}

const intervalo$ = new Observable<number>(subs => {
    let numRamdon = Math.random();
    const intervalId = setInterval(()=>{
        subs.next(numRamdon)
    }, 1000);

    return ()=> {
        clearInterval(intervalId); // Se ejecuta siempre que se llame al unsubscribe
        console.log('Intervalo destruido');
    }
})

//const subs1$ = intervalo$.subscribe(rnd => console.log('subs1', rnd));
//const subs2$ = intervalo$.subscribe(rnd => console.log('subs2', rnd));

/**
 * Ejemplo de subject
 * 1. casteo multiple: todas las subscripciones estan sujetas a este subject
 * 2. tambien es un observer
 * 3. se puede manejar el Next, Error, Complete
 * 
 * cuando la data es producida por el observable en si mismo, es considerado un 'Cold Observable'
 * Pero cuando la data es producida FUERA del observable es llamado 'Hot Observable'
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1$ = subject$.subscribe(observer);
const subs2$ = subject$.subscribe(observer);

setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500)