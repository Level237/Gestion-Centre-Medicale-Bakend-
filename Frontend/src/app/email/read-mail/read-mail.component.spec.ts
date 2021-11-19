import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ReadMailComponent } from "./read-mail.component";
describe("ReadMailComponent", () => {
  let component: ReadMailComponent;
  let fixture: ComponentFixture<ReadMailComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReadMailComponent],
      }).compileComponents();
    })
  );
  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
