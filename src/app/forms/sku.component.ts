import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'sku',
    templateUrl: './sku.component.html'
})
export class SkuComponent {
    onSubmit(formValue: any): void {
        console.log(formValue);
    }
}

@Component({
    selector: 'sku-builder',
    templateUrl: './sku.component-builder.html'
})
export class SkuComponentBuilder {
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['ABC1324']
        });
    }

    onSubmit(formValue: any): void {
        console.log(formValue);
    }
}