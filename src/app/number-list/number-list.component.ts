import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {

  numList:number[]=[2,3,4,5,6,7,14,13];
  selectbtn!:string;
  @ViewChild(NumberComponent) child!:NumberComponent;

  ngAfterViewInit(){
   
  }

  constructor() { }

  ngOnInit(): void {
  }

  selectedbtn(value:string){
    this.selectbtn=value;
  }

}
