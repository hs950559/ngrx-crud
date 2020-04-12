import { Component, OnInit } from '@angular/core';
import { TiktokService } from './services/tiktok.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tiktok',
  templateUrl: './tiktok.component.html',
  styleUrls: ['./tiktok.component.scss'],
})
export class TiktokComponent implements OnInit {
  form: FormGroup;
  users$: any;
  constructor(private tiktokService: TiktokService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', { updateOn: 'blur' }],
      password: ['', { updateOn: 'blur' }],
      city: ['', { updateOn: 'blur' }],
      state: [''],
      zip: ['', { updateOn: 'blur' }],
      address: ['', { updateOn: 'blur' }],
      color: [''],
      skill: [''],
      rememberMe: [''],
    });
    this.users$ = this.tiktokService.getUsers();

    this.form.valueChanges.pipe(tap((val) => console.log(val))).subscribe();
  }

  saveForm() {
    console.log('Saving...', this.form.value);
  }
}
