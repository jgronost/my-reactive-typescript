import {ReplaySubject} from "rxjs";

function myReplaySubjectTimeFramed() {

    var subject = new ReplaySubject(300, 500); //  buffer 300 values for new subscribers but only within 500ms

    subject.subscribe({
        next: (v) => console.log('observerA: ' + v)
    });

    let i = 1;
    setInterval(() => subject.next(i++), 200);

    setTimeout(() => {
        subject.subscribe({
            next: (v) => console.log('observerB: ' + v)
        });
    }, 1000);
}

myReplaySubjectTimeFramed();