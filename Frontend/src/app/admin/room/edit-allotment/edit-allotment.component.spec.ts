import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { EditAllotmentComponent } from "./edit-allotment.component";
describe("EditAllotmentComponent", () => {
  let component: EditAllotmentComponent;
  let fixture: ComponentFixture<EditAllotmentComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditAllotmentComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
