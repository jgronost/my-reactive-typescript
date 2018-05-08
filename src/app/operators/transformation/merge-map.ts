import {delay, flatMap, mergeMap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

/**
 * Map to observable, emit values.
 *
 */
function myMergeMap() {
    //emit delay value
    const source = of(2000, 3000, 4000);
    source.subscribe(val => console.log(val));

    source.pipe(
        mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    ).subscribe(val =>
        console.log(`With mergeMap: ${val}`)
    );

    // flatMap is an alias for mergeMap !
    source
        .pipe(
            flatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
        ).subscribe(val =>
        console.log(`With flatMap: ${val}`)
    );
}
myMergeMap();