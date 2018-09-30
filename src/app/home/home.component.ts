import {Component, OnInit} from '@angular/core';
import {STATES} from '../models/app.constants';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import {CONSTITUENCIES} from '../models/constituencies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public states = STATES;
  public profileForm : FormGroup;
  public stateControl : AbstractControl;
  public constituencyControl: AbstractControl;
  public constituencies = CONSTITUENCIES;
  public stateConstituencies;
  public ministers;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      state: new FormControl(''),
      constituency: new FormControl('')
    });

    this.stateControl = this.profileForm.controls['state'];
    this.constituencyControl = this.profileForm.controls['constituency'];
    this.listenToValueChange();
  }

  listenToValueChange(){
    this.stateControl.valueChanges.subscribe(stateSelected => {
      this.ministers = null;
      this.setToDefault();
      this.showParticularConstituency(stateSelected);
      console.log("STATE SELE", stateSelected)
    })
  }

  setToDefault(){
    this.constituencyControl.setValue('');
  }

  showParticularConstituency(stateSelected: string){
    this.stateConstituencies = this.constituencies[stateSelected];
    this.updateMinisterOnValueChange();
    console.log("---", this.stateConstituencies)
  }

  updateMinisterOnValueChange(){
    this.constituencyControl.valueChanges.subscribe(constituencySelected => {
      this.ministers = constituencySelected ? this.getParticularConstituency(constituencySelected).ministers : null;
      console.log("ministers SELE", constituencySelected, this.ministers)
    })
  }

  getParticularConstituency(code){
    return this.stateConstituencies.find(item => item.code === code) || {}
  }

  submitForm(){
    console.log("SUBIT", this.profileForm.get('state').value)
  }

}
