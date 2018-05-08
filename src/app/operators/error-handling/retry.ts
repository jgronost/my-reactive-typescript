import {interval} from "rxjs/observable/interval";
import {_throw} from "rxjs/observable/throw";
import {of} from "rxjs/observable/of";
import {retry, mergeMap} from "rxjs/operators";

/**
 * Retry an observable sequence a specific number of times should an error occur.
 */
function myRetry() {
    const source = interval(1000);
    const example = source.pipe(
        mergeMap(val => {
            //throw error for demonstration
            if (val > 5) {
                return _throw('Error!');
            }
            return of(val);
        }),
        //retry 2 times on error
        retry(2)
    );

    example.subscribe({
        next: val => console.log(val),
        error: val => console.log(`${val}: Retried 2 times then quit!`)
    });
}
myRetry();
