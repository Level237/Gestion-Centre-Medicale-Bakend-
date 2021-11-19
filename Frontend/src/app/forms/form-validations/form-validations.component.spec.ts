import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormValidationsComponent } from "./form-validations.component";
describe("FormValidationsComponent", () => {
  let component: FormValidationsComponent;
  let fixture: ComponentFixture<FormValidationsComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormValidationsComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
