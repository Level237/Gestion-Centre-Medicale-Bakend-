import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { First3Component } from "./first3.component";

describe("First3Component", () => {
  let component: First3Component;
  let fixture: ComponentFixture<First3Component>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [First3Component],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(First3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
