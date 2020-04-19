import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, pluck, distinctUntilChanged } from "rxjs/operators";

// El throttleTime: permite emitir un valor, pero si se emiten valores dentro del tiempo
// estimado solo emitira el primero xyz -> 1seg -> solo emite el 'x'

const click$ = fromEvent(document, "click");
click$.pipe(throttleTime(3000)).subscribe(console.log);

const input = document.querySelector(".btn") as HTMLElement;
const input$ = fromEvent(input, "keyup");

// leading: primer elemento, trailing: ultimo elemento
input$
  .pipe(throttleTime(1000,asyncScheduler, {
      leading:true,
      trailing:true
  }), pluck("target", "value"), distinctUntilChanged())
  .subscribe(console.log);
