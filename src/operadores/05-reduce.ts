import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

// reduce: es un acumulador a las emisiones producidas por el observable
// recordar que no tendremos nuinguna emision hasta que se complete el observable

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log('Total arr:', total);

interval(1000).pipe(
    take(10),
    tap(console.log),
    reduce(totalReducer, 20)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Completado')
})