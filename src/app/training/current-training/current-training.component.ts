import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
import { take } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter<void>();
  progress = 0;
  timer: number;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    const observable1 = fromEvent(document, 'click')
    .pipe(
      take(2)
    )
     .subscribe(() => console.log('You clicked the page!'));
    this.startorResumeTimer();
  }

  startorResumeTimer() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000)
  }
  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingExit.emit();
      }
      else{
        this.startorResumeTimer();
      }
    }
    );
  }

}
