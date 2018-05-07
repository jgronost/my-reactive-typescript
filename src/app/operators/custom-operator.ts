import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/from';

function multiplyByTen(input) {
    const output = Observable.create(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
    return output;
}

function myCustomOperator() {
    const input = Observable.from([1, 2, 3, 4]);
    const output = multiplyByTen(input);
    output.subscribe(x => console.log(x));
}

myCustomOperator();