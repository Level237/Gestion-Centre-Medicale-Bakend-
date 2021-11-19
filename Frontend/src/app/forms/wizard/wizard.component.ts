import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-wizard",
  templateUrl: "./wizard.component.html",
  styleUrls: ["./wizard.component.scss"],
})
export class WizardComponent implements OnInit {
  isLinear = false;
  HFormGroup1: FormGroup;
  HFormGroup2: FormGroup;
  VFormGroup1: FormGroup;
  VFormGroup2: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
    this.HFormGroup1 = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
    });
    this.HFormGroup2 = this._formBuilder.group({
      address: ["", Validators.required],
    });

    this.VFormGroup1 = this._formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
    });
    this.VFormGroup2 = this._formBuilder.group({
      address: ["", Validators.required],
    });
  }
}
