import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { EditappointmentComponent } from "./editappointment.component";
describe("EditappointmentComponent", () => {
  let component: EditappointmentComponent;
  let fixture: ComponentFixture<EditappointmentComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditappointmentComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(EditappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
