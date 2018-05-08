import {of} from "rxjs/observable/of";
import {delay, map} from "rxjs/operators";
import "rxjs/add/operator/toPromise";
import {_throw} from "rxjs/observable/throw";

/**
 * Convert observable to promise.
 */
function myToPromise() {

    const example = of("Example");
    example.subscribe(val => console.log(val));

    //convert to promise
    const myPromise: Promise<string> = example.pipe(delay(3000))
        .toPromise();

    myPromise.then(result => {
            console.log('Then from Promise:', result);
    }).catch(result => {
        console.log('Catch from Promise:', result);
    });

    //convert to failed promise
    const myPromiseTwo: Promise<string> = _throw('This is an error!')
        .toPromise();

    myPromiseTwo.then(result => {
        console.log('Then from PromiseTwo:', result);
    }).catch(result => {
        console.log('Catch from PromiseTwo:', result);
    });

}
myToPromise();