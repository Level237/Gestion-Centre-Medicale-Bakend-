import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-form-examples",
  templateUrl: "./form-examples.component.html",
  styleUrls: ["./form-examples.component.scss"],
})
export class FormExamplesComponent {
  // Form 1
  register: FormGroup;
  hide = true;
  // Form 2
  secondForm: FormGroup;
  hide2 = true;
  // Form 3
  thirdForm: FormGroup;
  hide3 = true;
  constructor(private fb: FormBuilder) {
    this.initForm();
    this.initSecondForm();
    this.initThirdForm();
  }
  initForm() {
    this.register = this.fb.group({
      first: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      last: [""],
      password: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      address: [""],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      termcondition: [false, [Validators.requiredTrue]],
    });
  }
  initSecondForm() {
    this.secondForm = this.fb.group({
      first: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      last: [""],
      password: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      address: [""],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      termcondition: [false, [Validators.requiredTrue]],
    });
  }
  initThirdForm() {
    this.thirdForm = this.fb.group({
      first: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      last: [""],
      password: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      address: [""],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      termcondition: [false, [Validators.requiredTrue]],
    });
  }
  onRegister() {
    console.log("Form Value", this.register.value);
  }
  onsecondFormSubmit() {
    console.log("Form Value", this.secondForm.value);
  }
  onThirdFormSubmit() {
    console.log("Form Value", this.thirdForm.value);
  }
}
