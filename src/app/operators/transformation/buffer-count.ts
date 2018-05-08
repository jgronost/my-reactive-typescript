import {interval} from "rxjs/observable/interval";
import {bufferCount, bufferTime} from "rxjs/operators";

/**
 * Collect emitted values until provided number is fulfilled, emit as array.
 */
function myBufferCount() {

    interval(500)
        .pipe(bufferCount(4))
        .subscribe(val => console.log(val));
}
myBufferCount();