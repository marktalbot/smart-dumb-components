/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SmartComponent } from './smart.component';

describe('Component: Smart', () => {
  it('should create an instance', () => {
    let component = new SmartComponent();
    expect(component).toBeTruthy();
  });
});
