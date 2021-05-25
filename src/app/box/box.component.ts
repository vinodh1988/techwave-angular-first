import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
theme="blackbox"
@Input() title:any;
@Input('item') things:any; 
@Output('listen') send:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handle(){
    this.theme= this.theme=="blackbox"? "box" : "blackbox";
  }

  clicked(x:string){
    this.send.emit(x);
  }
}
