import { fromEvent } from "rxjs";
import { debounceTime, map, pluck, distinctUntilChanged } from "rxjs/operators";

// El debounceTime: emite el valor despues de un tiempo indicado en su parametro

const click$ = fromEvent(document, "click");
click$.pipe(debounceTime(3000)).subscribe(console.log);

const input = document.querySelector(".btn") as HTMLElement;

const input$ = fromEvent(input, "keyup");
input$.pipe(
    debounceTime(1000),
    pluck("target", "value"),
    distinctUntilChanged()
    ).subscribe(console.log);
