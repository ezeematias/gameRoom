import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PollService } from 'src/app/services/poll.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private readonly fb: FormBuilder, private spinnerService: SpinnerService, private pollService: PollService) { }

  form!: FormGroup;
  rePassword: string = '';
  errorShow: boolean = false;
  errorMessage: string = '';

  getValue(value: string): AbstractControl {
    return this.form.get(value) as FormGroup;
  }

  get lastNameCtrl(): AbstractControl {
    return this.form.get('lastname') as FormGroup;
  }

  get nameCtrl(): AbstractControl {
    return this.form.get('name') as FormGroup;
  }

  get cellCtrl(): AbstractControl {
    return this.form.get('cellPhone') as FormGroup;
  }
  get commentCtrl(): AbstractControl {
    return this.form.get('comment') as FormGroup;
  }

  registrar() {
    this.spinnerService.show();
    this.pollService.registerPoll(this.form).then(res => { }).catch(error => console.log(error)).finally(() => { this.spinnerService.hide(); this.router.navigate(['/home']); })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      lastname: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      name: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      age: ['', [Validators.min(18), Validators.max(99)]],
      cellPhone: ['', [Validators.minLength(8), Validators.maxLength(10)]]
    });
  }

}
