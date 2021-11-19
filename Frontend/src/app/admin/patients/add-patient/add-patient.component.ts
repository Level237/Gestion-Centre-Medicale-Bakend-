import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-add-patient",
  templateUrl: "./add-patient.component.html",
  styleUrls: ["./add-patient.component.sass"],
})
export class AddPatientComponent {
  patientForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      first: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      last: [""],
      gender: ["", [Validators.required]],
      mobile: [""],
      dob: ["", [Validators.required]],
      age: [""],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      maritalStatus: [""],
      address: [""],
      bGroup: [""],
      bPresure: [""],
      sugger: [""],
      injury: [""],
      uploadImg: [""],
    });
  }
  onSubmit() {
    console.log("Form Value", this.patientForm.value);
  }
}
