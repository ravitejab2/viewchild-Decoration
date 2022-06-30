import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @Input() 
  number!:number;
  @Input()
  selectAll!:boolean;
  @Input()
  selectOdd!:boolean;
  selectedcheckBox:boolean=false;
  constructor() { }
  
  ngOnInit(): void {
  
  }
  ngOnChanges(){

    if(this.selectAll){
      this.selectedcheckBox=true;
    }
    if(this.selectOdd){
      if(this.number%2==1){
        this.selectedcheckBox=true;
      }
      else{
        this.selectedcheckBox=false;
      }
    }
  }

  
}

