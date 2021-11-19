import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AddStaffComponent } from "./add-staff.component";
describe("AddStaffComponent", () => {
  let component: AddStaffComponent;
  let fixture: ComponentFixture<AddStaffComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AddStaffComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
