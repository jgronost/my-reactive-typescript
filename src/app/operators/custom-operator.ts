import {Observable, from} from "rxjs/index";

function multiplyByTen(input) {
    let output = Observable.create(function subscribe(observer) {
        input.subscribe({
            next: (v) => observer.next(10 * v),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
    return output;
}

function myCustomOperator() {
    let input = from([1, 2, 3, 4]);
    let output = multiplyByTen(input);
    output.subscribe(x => console.log(x));
}

myCustomOperator();