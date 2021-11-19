import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { Dashboard2Component } from "./dashboard2.component";
describe("Dashboard2Component", () => {
  let component: Dashboard2Component;
  let fixture: ComponentFixture<Dashboard2Component>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Dashboard2Component],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
