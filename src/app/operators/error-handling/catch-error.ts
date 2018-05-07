import {_throw} from "rxjs/observable/throw";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";

function myCatchError() {
    const source = _throw('This is an error!');
    //gracefully handle error, returning observable with error message
    const example = source.pipe(catchError(val => of(`I caught: ${val}`)));

    example.subscribe(val => console.log(val));
}
myCatchError();