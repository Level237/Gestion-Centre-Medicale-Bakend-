import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ApexchartComponent } from "./apexchart.component";
describe("ApexchartComponent", () => {
  let component: ApexchartComponent;
  let fixture: ComponentFixture<ApexchartComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ApexchartComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(ApexchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
