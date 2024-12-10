import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonsIconsComponent },
  { path: 'formFieldInput', component: FormFieldInputComponent },
  { path: 'progressBarSpinner', component: ProgressSpinnerComponent },
  { path: 'tab', component: TabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
