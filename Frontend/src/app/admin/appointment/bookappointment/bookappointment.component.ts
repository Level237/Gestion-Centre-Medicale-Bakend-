import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-bookappointment",
  templateUrl: "./bookappointment.component.html",
  styleUrls: ["./bookappointment.component.sass"],
})
export class BookappointmentComponent {
  bookingForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      first: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      last: [""],
      gender: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      address: [""],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      dob: ["", [Validators.required]],
      doctor: ["", [Validators.required]],
      doa: ["", [Validators.required]],
      toa: ["", [Validators.required]],
      injury: [""],
      note: [""],
      uploadImg: [""],
    });
  }
  onSubmit() {
    console.log("Form Value", this.bookingForm.value);
  }
}
