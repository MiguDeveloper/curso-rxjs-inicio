import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

// funcion que hace el calculo
const calcularPorcentajeScroll = event => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;

  console.log({ scrollTop, scrollHeight, clientHeight });

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, "scroll");
let progressBar = document.querySelector(".progress-bar") as HTMLElement;

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(map(event => calcularPorcentajeScroll(event)));

progress$.subscribe(porcentaje => {
  progressBar.style.width = `${porcentaje}%`;
});
