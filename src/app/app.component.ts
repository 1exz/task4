import { Component,ViewChild,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
someMethods(ev:any){
  console.log(ev,"and go to some text")
}
}

