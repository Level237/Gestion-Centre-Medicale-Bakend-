import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormControlsComponent } from "./form-controls.component";
describe("FormControlsComponent", () => {
  let component: FormControlsComponent;
  let fixture: ComponentFixture<FormControlsComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormControlsComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
