import {of} from "rxjs/observable/of";
import {catchError} from "rxjs/operators";
import {fromPromise} from "rxjs/observable/fromPromise";

function myFromPromise() {
    //example promise that will resolve or reject based on input
    const myPromise = willReject => {
        return new Promise((resolve, reject) => {
            if (willReject) {
                reject('Rejected!');
            }
            resolve('Resolved!');
        });
    };

    fromPromise(myPromise(false)).subscribe(val => console.log(val));

    fromPromise(myPromise(true)).pipe(
        //catch and gracefully handle rejections
        catchError(error => of(`Error: ${error}`)))
        .subscribe(val => console.log(val));
}
myFromPromise();