import {interval} from "rxjs/observable/interval";
import {map, withLatestFrom} from "rxjs/operators";

function myWithLatestFrom() {
    // emit every 2s
    const source = interval(2000);
    // emit every 1s
    const secondSource = interval(1000);
    const example = source.pipe(
        withLatestFrom(secondSource),
        map(([first, second]) => {
            return `First Source (2s): ${first} Second Source (1s): ${second}`;
        })
    );

    example.subscribe(val => console.log(val));
}
myWithLatestFrom();