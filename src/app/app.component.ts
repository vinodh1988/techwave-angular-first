import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC Company APP';
  developers = ["John","Harry","Larry","Mathew","Nancy"]
  boxes=["Vegetables","Fruits","Spices","Chocalates","Electronic Goods"]
  message=""
  itemlist=[
    ['Potato','Tomato','Onion','Beans','Cabbage'],
    ['Apple','Orange','Mango','Grapes','Banana'],
    ['Cinnamon','Cumin','Cardamom','Pepper'],
    ['Cadbury','Nestle'],
    ['Mobile','Laptop','Camera','Pendrive']
  ]
  fcolor="#335EFF"
  bgcolor="#33BEFF"
  
  receive(boxno:number,data:string){
    this.message= this.boxes[boxno]+ " is clicked and the item selected is "+data;
  }
}
