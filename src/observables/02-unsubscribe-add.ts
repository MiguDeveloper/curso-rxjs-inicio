// Creamos un observable
import { Observable, Observer } from 'rxjs';

// Creamo un observer
const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado:')
}

const intervalo$ = new Observable<number>(subscriber => {
    let contador = 0;
    
    const interval = setInterval(() => {
        subscriber.next(contador++);
        console.log(contador);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})

//const subs = intervalo$.subscribe(rpta => console.log('Num: ', rpta));
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2)
    .add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('Completado timeout');
}, 3000);