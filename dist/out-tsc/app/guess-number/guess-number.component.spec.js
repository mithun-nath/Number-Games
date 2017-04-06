import { async, TestBed } from '@angular/core/testing';
import { GuessNumberComponent } from './guess-number.component';
describe('GuessNumberComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GuessNumberComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GuessNumberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/mithunnath-blogger/Angular2/src/app/guess-number/guess-number.component.spec.js.map