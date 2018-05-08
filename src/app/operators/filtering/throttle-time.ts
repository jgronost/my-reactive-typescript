import {interval} from "rxjs/observable/interval";
import {throttleTime} from "rxjs/operators";

/**
 * Emit latest value when specified duration has passed.
 */
function myThrottleTime() {
    interval(100)
        .pipe(throttleTime(500))
        .subscribe(v => console.log(v));

}
myThrottleTime();