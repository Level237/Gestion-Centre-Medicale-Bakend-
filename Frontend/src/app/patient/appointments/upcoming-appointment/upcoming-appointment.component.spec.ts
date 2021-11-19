import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { UpcomingAppointmentComponent } from "./upcoming-appointment.component";

describe("UpcomingUpcommingAppointmentComponent", () => {
  let component: UpcomingAppointmentComponent;
  let fixture: ComponentFixture<UpcomingAppointmentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UpcomingAppointmentComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
