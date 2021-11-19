import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { DragDropComponent } from "./drag-drop.component";
describe("DragDropComponent", () => {
  let component: DragDropComponent;
  let fixture: ComponentFixture<DragDropComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DragDropComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
