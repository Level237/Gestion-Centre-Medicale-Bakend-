import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { HelperClassesComponent } from "./helper-classes.component";
describe("HelperClassesComponent", () => {
  let component: HelperClassesComponent;
  let fixture: ComponentFixture<HelperClassesComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HelperClassesComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(HelperClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
