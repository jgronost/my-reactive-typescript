import {_throw} from "rxjs/observable/throw";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";

/**
 * Gracefully handle errors in an observable sequence.
 */
function myCatchError() {
    const source = _throw('This is an error!');
    const example = source.pipe(catchError(val => of(`I caught: ${val}`)));

    example.subscribe(val => console.log(val));
}
myCatchError();