import { Component, OnInit } from '@angular/core';
import { TiktokService } from './services/tiktok.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tiktok',
  templateUrl: './tiktok.component.html',
  styleUrls: ['./tiktok.component.scss'],
})
export class TiktokComponent implements OnInit {
  form: FormGroup;
  users$: any;
  techSkills: any[] = [
    { name: 'Java', value: 'java' },
    { name: 'PHP', value: 'php' },
    { name: '.NET', value: '.net' },
    { name: 'Node JS', value: 'nodejs' },
  ];
  constructor(private tiktokService: TiktokService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', { validators: [Validators.required], updateOn: 'blur' }],
      password: ['', { updateOn: 'blur' }],
      city: ['', { updateOn: 'blur' }],
      state: [''],
      zip: ['', { updateOn: 'blur' }],
      address: ['', { updateOn: 'blur' }],
      color: [''],
      skills: this.fb.array([]),
      rememberMe: [''],
    });
    this.users$ = this.tiktokService.getUsers();

    this.form.valueChanges.pipe(tap((val) => console.log(val))).subscribe();
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  onCheckboxChange(e) {
    if (e.target.checked) {
      this.skills.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      this.skills.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          this.skills.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  saveForm() {
    console.log('Saving...', this.form.value);
  }
}
