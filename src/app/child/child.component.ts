import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
     
    @Output() onMeassage = new EventEmitter<string>(); 
      ngOnInit(){
        this.onMeassage.emit('Hello from the child');
      }
  }

