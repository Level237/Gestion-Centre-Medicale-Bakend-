import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { StaffProfileComponent } from "./staff-profile.component";
describe("StaffProfileComponent", () => {
  let component: StaffProfileComponent;
  let fixture: ComponentFixture<StaffProfileComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StaffProfileComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(StaffProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
