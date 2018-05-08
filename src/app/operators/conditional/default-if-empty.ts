import {of} from "rxjs/observable/of";
import {defaultIfEmpty} from "rxjs/operators";

/**
 * Emit given value if nothing is emitted before completion.
 */
function myDefaultIfEmpty() {
    //emit 'Observable.of() Empty!' when empty, else any values from source
    const exampleOne = of().pipe(defaultIfEmpty('Observable.of() Empty!'));

    exampleOne.subscribe(val => console.log(val));
}
myDefaultIfEmpty();