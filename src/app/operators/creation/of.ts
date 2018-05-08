import {of} from "rxjs/observable/of";

/**
 * Emit variable amount of values in a sequence.
 */
function myOf() {
    const source = of(1, 2, 3, 4, 5);

    source.subscribe(val => console.log(val));
}
myOf();