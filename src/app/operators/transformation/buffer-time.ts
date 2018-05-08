import {interval} from "rxjs/observable/interval";
import {bufferTime} from "rxjs/operators";

/**
 * Collect emitted values until provided time has passed, emit as array.
 */
function myBufferTime() {

    interval(500)
        .pipe(bufferTime(2000))
        .subscribe(val => console.log(val));
}
myBufferTime();