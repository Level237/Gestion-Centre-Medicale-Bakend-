import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NgxSpinner, PRIMARY_SPINNER } from './ngx-spinner.enum';
import * as i0 from "@angular/core";
export class NgxSpinnerService {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    constructor() {
        /**
         * Spinner observable
         *
         * @memberof NgxSpinnerService
         */
        // private spinnerObservable = new ReplaySubject<NgxSpinner>(1);
        this.spinnerObservable = new BehaviorSubject(null);
    }
    /**
    * Get subscription of desired spinner
    * @memberof NgxSpinnerService
    **/
    getSpinner(name) {
        return this.spinnerObservable.asObservable().pipe(filter((x) => x && x.name === name));
    }
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    show(name = PRIMARY_SPINNER, spinner) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                if (spinner && Object.keys(spinner).length) {
                    spinner['name'] = name;
                    this.spinnerObservable.next(new NgxSpinner(Object.assign(Object.assign({}, spinner), { show: true })));
                    resolve(true);
                }
                else {
                    this.spinnerObservable.next(new NgxSpinner({ name, show: true }));
                    resolve(true);
                }
            }, 10);
        });
    }
    /**
    * To hide spinner
    *
    * @memberof NgxSpinnerService
    */
    hide(name = PRIMARY_SPINNER, debounce = 10) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                this.spinnerObservable.next(new NgxSpinner({ name, show: false }));
                resolve(true);
            }, debounce);
        });
    }
}
NgxSpinnerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
NgxSpinnerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxSpinnerService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcGlubmVyL3NyYy9saWIvbmd4LXNwaW5uZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFXLE1BQU0sb0JBQW9CLENBQUM7O0FBSzFFLE1BQU0sT0FBTyxpQkFBaUI7SUFRNUI7OztPQUdHO0lBQ0g7UUFYQTs7OztXQUlHO1FBQ0gsZ0VBQWdFO1FBQ3pELHNCQUFpQixHQUFHLElBQUksZUFBZSxDQUFhLElBQUksQ0FBQyxDQUFDO0lBS2pELENBQUM7SUFDakI7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILElBQUksQ0FBQyxPQUFlLGVBQWUsRUFBRSxPQUFpQjtRQUNwRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQzFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLGlDQUFNLE9BQU8sS0FBRSxJQUFJLEVBQUUsSUFBSSxJQUFHLENBQUMsQ0FBQztvQkFDeEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmO1lBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQ0Q7Ozs7TUFJRTtJQUNGLElBQUksQ0FBQyxPQUFlLGVBQWUsRUFBRSxXQUFtQixFQUFFO1FBQ3hELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDdEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUF2REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOZ3hTcGlubmVyLCBQUklNQVJZX1NQSU5ORVIsIFNwaW5uZXIgfSBmcm9tICcuL25neC1zcGlubmVyLmVudW0nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hTcGlubmVyU2VydmljZSB7XG4gIC8qKlxuICAgKiBTcGlubmVyIG9ic2VydmFibGVcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICAvLyBwcml2YXRlIHNwaW5uZXJPYnNlcnZhYmxlID0gbmV3IFJlcGxheVN1YmplY3Q8Tmd4U3Bpbm5lcj4oMSk7XG4gIHB1YmxpYyBzcGlubmVyT2JzZXJ2YWJsZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Tmd4U3Bpbm5lcj4obnVsbCk7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE5neFNwaW5uZXJTZXJ2aWNlLlxuICAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIC8qKlxuICAqIEdldCBzdWJzY3JpcHRpb24gb2YgZGVzaXJlZCBzcGlubmVyXG4gICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICoqL1xuICBnZXRTcGlubmVyKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8Tmd4U3Bpbm5lcj4ge1xuICAgIHJldHVybiB0aGlzLnNwaW5uZXJPYnNlcnZhYmxlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKCh4OiBOZ3hTcGlubmVyKSA9PiB4ICYmIHgubmFtZSA9PT0gbmFtZSkpO1xuICB9XG4gIC8qKlxuICAgKiBUbyBzaG93IHNwaW5uZXJcbiAgICpcbiAgICogQG1lbWJlcm9mIE5neFNwaW5uZXJTZXJ2aWNlXG4gICAqL1xuICBzaG93KG5hbWU6IHN0cmluZyA9IFBSSU1BUllfU1BJTk5FUiwgc3Bpbm5lcj86IFNwaW5uZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoc3Bpbm5lciAmJiBPYmplY3Qua2V5cyhzcGlubmVyKS5sZW5ndGgpIHtcbiAgICAgICAgICBzcGlubmVyWyduYW1lJ10gPSBuYW1lO1xuICAgICAgICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dChuZXcgTmd4U3Bpbm5lcih7IC4uLnNwaW5uZXIsIHNob3c6IHRydWUgfSkpO1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zcGlubmVyT2JzZXJ2YWJsZS5uZXh0KG5ldyBOZ3hTcGlubmVyKHsgbmFtZSwgc2hvdzogdHJ1ZSB9KSk7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH0pO1xuXG4gIH1cbiAgLyoqXG4gICogVG8gaGlkZSBzcGlubmVyXG4gICpcbiAgKiBAbWVtYmVyb2YgTmd4U3Bpbm5lclNlcnZpY2VcbiAgKi9cbiAgaGlkZShuYW1lOiBzdHJpbmcgPSBQUklNQVJZX1NQSU5ORVIsIGRlYm91bmNlOiBudW1iZXIgPSAxMCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgX3JlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3Bpbm5lck9ic2VydmFibGUubmV4dChuZXcgTmd4U3Bpbm5lcih7IG5hbWUsIHNob3c6IGZhbHNlIH0pKTtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0sIGRlYm91bmNlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19