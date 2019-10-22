import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { MobileValidator } from '../validators/mobile.validator';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public form: FormGroup;

    get name(): AbstractControl {
        return this.form.get('name');
    }

    get email(): AbstractControl {
        return this.form.get('email');
    }

    get mobile(): AbstractControl {
        return this.form.get('mobile');
    }

    get password(): AbstractControl {
        return this.form.get('password');
    }

    get confirm(): AbstractControl {
        return this.form.get('confirm');
    }

    constructor() {}

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            mobile: new FormControl('', [Validators.required, MobileValidator]),
            password: new FormControl('', Validators.required),
            confirm: new FormControl('', Validators.required)
        });
    }

    reset() {
        this.form.reset();
    }

    signup() {
        if (this.form.invalid) {
            return;
        }

        const name = this.form.get('name').value;
        const email = this.form.get('email').value;
        const mobile = this.form.get('mobile').value;
        const password = this.form.get('password').value;
        console.log({ name, email, mobile, password });
    }
}
