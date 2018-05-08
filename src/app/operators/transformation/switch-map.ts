/**
 * Map to observable, complete previous inner observable, emit values.
 *
 * The main difference between switchMap and other flattening operators is the cancelling effect.
 * On each emission the previous inner observable (the result of the function you supplied) is cancelled
 * and the new observable is subscribed:  Switch to a new observable.
 */
import {switchMap, flatMap} from "rxjs/operators";
import {timer} from "rxjs/observable/timer";
import {interval} from "rxjs/observable/interval";

function mySwitchMap() {
    const source = timer(0, 3100);

    //switch to new inner observable when source emits, emit items that are emitted

    const example = source.pipe(switchMap(() => interval(500)));
    // const example = source.pipe(flatMap(() => interval(500)));

    example.subscribe(val => console.log(val));
}
mySwitchMap();