import {Subject} from "rxjs/Subject";

function mySubject() {

    const subject = new Subject; // 0 is the initial value

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
}

mySubject();