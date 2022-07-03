import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @Input() 
  number!:number;
  
  selectedcheckBox:boolean=false;
  constructor() { }
  
  ngOnInit(): void {
  
  }
 

  
}

