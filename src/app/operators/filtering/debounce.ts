import "rxjs/add/operator/debounceTime"
import {debounce} from "rxjs/operators";
import {interval} from "rxjs/observable/interval";

/**
 * Discard emitted values that take less than the specified time, based on selector function, between output.
 */
function myDebounce() {

        const input = interval(1100);
        //const input = interval(900);

        // const input = of(1, 2, 3);
        //wait 1s between inputs to emit current value
        //throw away all other values
        input.subscribe(val => {
            console.log(`Input: ${val}`);
        });
        input
        .pipe(debounce(() => interval(1000)))
        .subscribe(val => {
            console.log(`Debounced Input: ${val}`);
        });
}
myDebounce();