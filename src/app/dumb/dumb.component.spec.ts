/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { DumbComponent } from './dumb.component';

describe('Component: Dumb', () => {
  it('should create an instance', () => {
    let component = new DumbComponent();
    expect(component).toBeTruthy();
  });
});
