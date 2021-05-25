import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
theme="blackbox"
  constructor() { }

  ngOnInit(): void {
  }

  handle(){
    this.theme= this.theme=="blackbox"? "box" : "blackbox";
  }

}
