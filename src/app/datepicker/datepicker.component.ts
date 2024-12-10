import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform'
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {
  public startDate = new Date(2022, 9, 28)
  public minDate = new Date(2022, 8, 28)
  public maxDate = new Date(2022, 11, 28)

  // public startDate = moment([2022, 9, 28])
  // public minDate = moment([2022, 8, 28])
  // public maxDate = moment([2022, 11, 28])

  constructor(private plattform: Platform) { }

  get isTouchDevice() {
    return this.plattform.ANDROID || this.plattform.IOS
  }
}
