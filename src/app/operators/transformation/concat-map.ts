/**
 * Map values to inner observable, subscribe and emit in order.
 * concatMap does not subscribe to the next observable until the previous completes
 */
import {of} from "rxjs/observable/of";
import {concatMap, delay} from "rxjs/operators";

function myConcatMap() {
    //emit delay value
    const source = of(2000, 3000, 4000);

    // map value from source into inner observable, when complete emit result and move to next
    const example = source.pipe(
        concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );

    source.subscribe(val => console.log(val));
    example.subscribe(val =>
        console.log(`With concatMap: ${val}`)
    );
}
myConcatMap();