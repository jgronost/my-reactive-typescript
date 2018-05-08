import {delay, take, takeUntil} from "rxjs/operators";
import {interval} from "rxjs/observable/interval";
import {of} from "rxjs/observable/of";


/**
 * Emit provided number of values before completing.
 */
function myTake() {
    interval(100)
        .pipe(take(5))
        .subscribe(val => console.log(val));
}
myTake();