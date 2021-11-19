import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AllroomComponent } from "./allroom.component";
describe("AllroomComponent", () => {
  let component: AllroomComponent;
  let fixture: ComponentFixture<AllroomComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllroomComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AllroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
