import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route:Router) { }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // selectCountryCode: [null, Validators.required],
      phnumber: [null, [Validators.required, Validators.pattern("[0-9 ]{12}")]],
      feedback:['',Validators.required]

  }, {
     
  });
  }

  get f() { return this.feedbackForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.feedbackForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.feedbackForm.value, null, 4));
      this.route.navigate(['/list'], { queryParams: { sort: 'LowTohigh' } });
  }

  onReset() {
      this.submitted = false;
      this.feedbackForm.reset();
      this.route.navigate(['/list'], { queryParams: { sort: 'LowTohigh' } });
  }

}
