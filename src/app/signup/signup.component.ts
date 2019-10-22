import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public form: FormGroup;

    constructor() {}

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            mobile: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            confirm: new FormControl('', Validators.required)
        });
    }

    reset() {
        this.form.reset();
    }

    signup() {
        const name = this.form.get('name').value;
        const email = this.form.get('email').value;
        const mobile = this.form.get('mobile').value;
        const password = this.form.get('password').value;
        console.log({ name, email, mobile, password });
    }
}
