import {of} from "rxjs/observable/of";
import {concat} from "rxjs/observable/concat";

/**
 * Subscribe to observables in order as previous completes, emit values.
 */
function myConcat() {
    const sourceOne = of(1, 2, 3);
    const sourceTwo = of(4, 5, 6);

    const example = concat(sourceOne, sourceTwo);

    example.subscribe(val =>
        console.log(val)
    );

}

myConcat();