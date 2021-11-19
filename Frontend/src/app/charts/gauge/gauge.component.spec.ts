import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { GaugeComponent } from "./gauge.component";
describe("GaugeComponent", () => {
  let component: GaugeComponent;
  let fixture: ComponentFixture<GaugeComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GaugeComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
