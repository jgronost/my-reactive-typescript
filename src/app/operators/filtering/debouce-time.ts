import "rxjs/add/operator/debounceTime"
import {debounceTime} from "rxjs/operators";
import {interval} from "rxjs/observable/interval";

function myDebounceTime() {

    const input = interval(1100);
    // const input = interval(900);
    // const input = of(1, 2, 3);
    //wait 1s between inputs to emit current value
    //throw away all other values
    input.subscribe(val => {
        console.log(`Input: ${val}`);
    });
    input
        .pipe(debounceTime(1000))
        .subscribe(val => {
            console.log(`Debounced Input: ${val}`);
        });

}
myDebounceTime();