import { async, TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
describe('WelcomeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [WelcomeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(WelcomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/mithunnath-blogger/Angular2/src/app/welcome/welcome.component.spec.js.map