import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input('parentData')
  public name: any;

  @Output()
  public filsEvent = new EventEmitter();
  fireEvent(){
    this.filsEvent.emit('Bonjour Monsieur');
  }
}
