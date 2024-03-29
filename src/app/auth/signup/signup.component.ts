import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
maxDate;
  constructor(private authService: AuthService, public dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
  onSubmit(form: NgForm) {
       this.authService.registerUser({
         email: form.value.email,
         password: form.value.password
       });
     }

     closeModal() {
      this.dialogRef.close();
    }
}
