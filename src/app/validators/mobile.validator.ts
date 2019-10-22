import { AbstractControl } from '@angular/forms';

export function MobileValidator(control: AbstractControl) {
    if (!control.value) {
        return null;
    }

    const mobile: string = control.value;
    let valid: boolean = true;

    if (mobile.length !== 11) {
        valid = false;
    }

    if (!mobile.match(/^-{0,1}\d+$/)) {
        valid = false;
    }

    if (mobile.substr(0, 2) !== '09') {
        valid = false;
    }

    return valid ? null : { mobile: true };
}
