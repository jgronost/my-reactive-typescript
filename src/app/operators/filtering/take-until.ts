import {delay, takeUntil} from "rxjs/operators";
import {interval} from "rxjs/observable/interval";
import {of} from "rxjs/observable/of";

/**
 * Emit values until provided observable emits.
 */
function myTakeUntil() {

    const sourceTwo = of("some").pipe(delay(550));

    interval(100)
        .pipe(takeUntil(sourceTwo))
        .subscribe(val => console.log(val));
}
myTakeUntil();