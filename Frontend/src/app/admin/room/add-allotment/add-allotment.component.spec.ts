import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AddAllotmentComponent } from "./add-allotment.component";
describe("AddAllotmentComponent", () => {
  let component: AddAllotmentComponent;
  let fixture: ComponentFixture<AddAllotmentComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AddAllotmentComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AddAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
