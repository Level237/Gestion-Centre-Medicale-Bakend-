import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MaterialTableComponent } from "./material-table.component";
describe("MaterialTableComponent", () => {
  let component: MaterialTableComponent;
  let fixture: ComponentFixture<MaterialTableComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MaterialTableComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
