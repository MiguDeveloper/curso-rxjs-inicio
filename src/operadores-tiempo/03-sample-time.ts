import { fromEvent } from "rxjs";
import { sampleTime, map } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(1000),
    map(({x,y}) => ({x,y}))
).subscribe(console.log);