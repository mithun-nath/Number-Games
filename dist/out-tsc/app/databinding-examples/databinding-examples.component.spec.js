import { async, TestBed } from '@angular/core/testing';
import { DatabindingExamplesComponent } from './databinding-examples.component';
describe('DatabindingExamplesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DatabindingExamplesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DatabindingExamplesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/mithunnath-blogger/Angular2/src/app/databinding-examples/databinding-examples.component.spec.js.map