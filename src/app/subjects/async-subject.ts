import {AsyncSubject} from "rxjs/index";

function myAsyncSubject() {

    var subject = new AsyncSubject();

    subject.subscribe({
        next: (v) => console.log('observerA: ' + v)
    });
    subject.next(0);
    subject.next(1);
    subject.next(2);

    subject.subscribe({
        next: (v) => console.log('observerB: ' + v)
    });

    subject.next(3);
    subject.complete();
}

myAsyncSubject();