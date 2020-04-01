// Creamos un observable
import { Observer, range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

// Creamo un observer
const observer: Observer<any> = {
  next: value => console.log("next: ", value),
  error: error => console.warn("error: ", error),
  complete: () => console.info("completado:")
};

const obs$ = range(1, 5);

obs$.pipe(map<number, number>(x => x * 10)).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

// sin usar pluck
const keyupCode$ = keyup$.pipe(map(event => event.code));

// usanso pluck: podemos llamar directamente a una propieda de una clase o por ejemplo
// en este caso a la propiedad de un objeto dentro del respuesta, no se usa el punto target.baseURI
const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));

// mapTo: Ahora si deseamos transformar la entrada en un resultado especial
const keyupMapTo$ = keyup$.pipe(mapTo("tecla presionada"));

keyupCode$.subscribe(code => console.log("map", code));
keyupPluck$.subscribe(code => console.log("pluck", code));
keyupMapTo$.subscribe(code => console.log("mapTo", code));
