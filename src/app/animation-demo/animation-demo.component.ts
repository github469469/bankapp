import { animate,state,style,transition,trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
        height:'300px',
        backgroundColor:'green'
      })),
      state('closed',style({
        height:'100px',
        backgroundColor:'red'
      })),
      transition('open => closed',[
        animate('1s')
      ]),
      transition('closed => open',[
        animate('2s')
      ])
      // transition('open => Closed',[

      //   animate('1s')
      // ]),
      // transition('Closed => open',[

      //   animate('2s')
      // ])
    ])
  ]
  

      })
export class AnimationDemoComponent implements OnInit {

  isOpen=true;
  constructor() { }

  ngOnInit(): void {
  }
 
 toggle(){

this.isOpen=!this.isOpen

 }
 
 
 
 
 
  // toggle(){

  //   this.isOpen=!this.isOpen
  // }

}
