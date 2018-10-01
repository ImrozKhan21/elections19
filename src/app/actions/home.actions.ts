// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
// Section 2
export const ADD_PROVINCE = 'Add Province';
export const ADD_CONSTITUENCY = 'Add Constituency';
export const ADD_MINISTER= 'Add Minister';

// Section 3
export class AddProvince implements Action {
  readonly type = ADD_PROVINCE;

  constructor(public payload: string) {}
}

export class AddConstituency implements Action {
  readonly type = ADD_CONSTITUENCY;
  constructor(public payload: string) {}
}

export class AddMinister implements Action {
  readonly type = ADD_MINISTER;

  constructor(public payload: string) {}
}

// Section 4
export type Actions = AddProvince | AddConstituency | AddMinister
