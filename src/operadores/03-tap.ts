import { tap, map } from "rxjs/operators";
import { range } from "rxjs";

const numeros$ = range(1, 5);

// el operador tap nos puede ayudar bastante para cuando queramos hacer
// labores de depuracion
numeros$
  .pipe(
    tap(x => console.log("antes", x)),
    map(x => x * 10),
    tap(x => console.log("depues", x)),
    tap({
      next: valor => console.log("despues", valor),
      complete: () => console.log("Se termino ejecucion")
    })
  )
  .subscribe(val => console.log("subs", val));
