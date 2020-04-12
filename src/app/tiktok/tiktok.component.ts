import { Component, OnInit } from '@angular/core';
import { TiktokService } from './services/tiktok.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      email: [''],
      password: [''],
      city: [''],
      state: [''],
      zip: [''],
      address: [''],
      color: [''],
      skill: [''],
      rememberMe: [''],
    });
    this.users$ = this.tiktokService.getUsers();
  }

  saveForm() {
    console.log('Saving...', this.form.value);
  }
}
