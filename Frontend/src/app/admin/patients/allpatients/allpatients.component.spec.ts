import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AllpatientsComponent } from "./allpatients.component";

describe("AllpatientsComponent", () => {
  let component: AllpatientsComponent;
  let fixture: ComponentFixture<AllpatientsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllpatientsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
