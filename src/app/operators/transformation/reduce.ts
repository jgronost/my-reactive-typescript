import {of} from "rxjs/observable/of";
import {reduce} from "rxjs/operators";

/**
 * Reduces the values from source observable to a single value that's emitted when the source completes.
 */
function myReduce() {
    const source = of(1, 2, 3);

    const example = source.pipe(
        reduce((acc, curr) => acc + curr, 0)
    );

    example.subscribe(val => console.log(val));
}
myReduce();