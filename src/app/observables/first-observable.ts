import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

function myFirstObservable(): void {
    console.log('Hello World');
    let myObservable = Observable.create(function (observer: Observer<number>) {
        try {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(() => {
                observer.next(4);
                observer.complete();
            }, 1000);
            // uncommenting will ... ?
            // throw new Error("Catastrophic failure");
        } catch (err) {
            observer.error(err);
        }
    });

    console.log("just before subscribe A");
    const subscription = myObservable.subscribe({
        next: x => console.log(`subscription A got value ${x}`),
        error: err => console.log(`subscription A got error ${err}`),
        complete: () => console.log("subscription A finished")

    });
    console.log(" just after subscribe A");
    // uncommenting will .... ?
    // subscription.unsubscribe();

    // uncommenting will .... ?
    // console.log("just before subscribe B");
    // let subscription2 = myObservable.subscribe({
    //     next: x => console.log(`subscription B got value ${x}`),
    //     error: err => console.log(`subscription B got error ${err}`),
    //     complete: () => console.log("subscription B finished")
    // });
    // console.log(" just after subscribe B");
}

myFirstObservable();