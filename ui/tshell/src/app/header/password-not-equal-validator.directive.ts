import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';


@Directive({
    selector: '[appPasswordNotEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordNotEqualValidatorDirective,
        multi: true
    }]
})
export class PasswordNotEqualValidatorDirective implements Validator {
    @Input() appPasswordNotEqualValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        const controlToCompare = control.parent.get(this.appPasswordNotEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
}

