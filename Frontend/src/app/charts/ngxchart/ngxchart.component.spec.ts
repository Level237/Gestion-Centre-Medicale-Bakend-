import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { NgxchartComponent } from "./ngxchart.component";
describe("NgxchartComponent", () => {
  let component: NgxchartComponent;
  let fixture: ComponentFixture<NgxchartComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgxchartComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(NgxchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
