import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AlldoctorsComponent } from "./alldoctors.component";
describe("AlldoctorsComponent", () => {
  let component: AlldoctorsComponent;
  let fixture: ComponentFixture<AlldoctorsComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AlldoctorsComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(AlldoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
