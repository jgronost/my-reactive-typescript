import "rxjs/add/operator/debounceTime"
import {debounceTime} from "rxjs/operators";
import {interval} from "rxjs/observable/interval";

/**
 * Discard emitted values that take less than the specified time between output.
 */
function myDebounceTime() {

    const input = interval(1100);
    // const input = interval(900);

    input.subscribe(val => {
        console.log(`Input: ${val}`);
    });

    input.pipe(debounceTime(1000))
        .subscribe(val => {
            console.log(`Debounced Input: ${val}`);
        });

}
myDebounceTime();