import {Observable, Subject} from "rxjs";

function myMulticastObservable() {
    let source = Observable.from([1, 2, 3]);
    let subject = new Subject();
    let multicasted = source.multicast(subject);

// These are, under the hood, `subject.subscribe({...})`:
    multicasted.subscribe({
        next: (v) => console.log('observerA: ' + v)
    });
    multicasted.subscribe({
        next: (v) => console.log('observerB: ' + v)
    });

// This is, under the hood, `source.subscribe(subject)`:
    multicasted.connect();
}

myMulticastObservable();