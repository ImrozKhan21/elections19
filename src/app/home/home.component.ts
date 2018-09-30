import {Component, OnInit} from '@angular/core';
import {STATES} from '../models/app.constants';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import {CONSTITUENCIES, Constituency} from '../models/constituencies';

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
  public ministerControl: AbstractControl;
  public constituencies = CONSTITUENCIES;
  public stateConstituencies: Array<Constituency>;
  public ministers;
  public ministerSelected;
  public constituencySelected?: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      state: new FormControl(''),
      constituency: new FormControl(''),
      minister: new FormControl('')
    });

    this.stateControl = this.profileForm.controls['state'];
    this.constituencyControl = this.profileForm.controls['constituency'];
    this.ministerControl = this.profileForm.controls['minister'];
    this.listenToValueChange();
  }

  listenToValueChange(){
    this.stateControl.valueChanges.subscribe(stateSelected => {
      this.setToDefault();
      this.showParticularConstituency(stateSelected);
    })
  }

  setToDefault(){
    this.ministers = null;
    this.constituencyControl.setValue('');
  }

  showParticularConstituency(stateSelected: string){
    this.stateConstituencies = this.constituencies[stateSelected];
    this.updateMinisterOnValueChange();
    console.log("---", this.stateConstituencies)
  }

  updateMinisterOnValueChange(){
    this.constituencyControl.valueChanges.subscribe(constituencySelected => {
      this.updateMinisterSelected();
      if(constituencySelected){
        let constituencySelectedForMinisters = this.getParticularConstituency(constituencySelected);
        this.ministers = constituencySelectedForMinisters ? constituencySelectedForMinisters.ministers : null;
        this.constituencySelected = constituencySelected;
      }
    })
  }

  updateMinisterSelected(){
    this.ministerControl.valueChanges.subscribe(minister => {
      this.ministerSelected = minister;
    })
  }

  getParticularConstituency(code): Constituency{
    return this.stateConstituencies.find(item => item.code === code);
  }

}
