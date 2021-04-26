import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  @Input() 
  public checked: boolean;

  @Input()
  public label: string;

  @Input()
  public name: string;

  @Output()
  public change: EventEmitter<boolean> = new EventEmitter<boolean>();

  public handleChange(isChecked: boolean): void {
   this.change.emit(isChecked);
  }
}
