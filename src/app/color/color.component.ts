import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.sass']
})
export class ColorComponent implements OnInit {

  constructor() { }
@Input() color:any;
@Output() public colorFrom = new EventEmitter<any>();
newColor:any;
  ngOnInit(): void {
  }
  change(value:any){
    this.color=value;
    this.colorFrom.emit(value);
  }
  
  

}
