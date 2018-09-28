import {Component, OnInit} from '@angular/core';
import {STATES} from '../models/app.constants';
import {FormGroup, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public states = STATES;
  public profileForm : FormGroup;
  public stateControl : AbstractControl;

  constructor() {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileForm = new FormGroup({
      state: new FormControl(''),
    });

    this.stateControl = this.profileForm.controls['state'];
  }

  submitForm(){
    console.log("SUBIT", this.profileForm.get('state').value)
  }

}
