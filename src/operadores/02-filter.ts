import { filter, map } from "rxjs/operators";
import { range, Observable, from, fromEvent } from "rxjs";

const rango$ = range(1, 10);

const filter$ = rango$.pipe(filter(val => val % 2 === 1));
const filter2$ = rango$.pipe(
  filter((val, i) => {
    console.log("index: ", i);
    return val % 2 === 1;
  })
);

const personajes: personaje[] = [
  { tipo: "heroe", nombre: "Batman" },
  { tipo: "heroe", nombre: "Robbin" },
  { tipo: "Villano", nombre: "Jocker" }
];

filter$.subscribe(val => console.log(val));
filter2$.subscribe(val => console.log(val));

//let lstHeroes: any[] = [];
const lstHeroes = from(personajes);

// Con mi forma de recorrerlo
lstHeroes.subscribe(next =>  {
  if (next.tipo === "heroe") {
    console.log(next);
  }
});

// Forma curso
from(personajes).pipe(
    filter(personaje => personaje.tipo === 'heroe')
).subscribe(console.log);

// operadores encadenados: aqui por ejemplo solo mostraremos cuando se presione la tecla 'enter'
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key ==='Enter')
)

keyup$.subscribe(console.log);


interface personaje {
    tipo: string;
    nombre: string;
}