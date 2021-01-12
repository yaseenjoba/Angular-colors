import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.sass']
})
export class ColorsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  name1:any;
  colorName:any;
  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.name = params['name'];
    //   console.log(this.name);
    // });
    const routeParams = this.route.snapshot.paramMap;
    const colorIdFromRoute = routeParams.get('name1');
    this.colorName=colorIdFromRoute;
    console.log(colorIdFromRoute);
  }
  prevColor:any
  changeName(value:any){
    this.prevColor=this.colorName;
    console.log(value);
    this.colorName=value;
  }
  
}
