import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lasts',
  templateUrl: './lasts.component.html',
  styleUrls: ['./lasts.component.css']
})
export class LastsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    alert("Your Query has been send to the team")
  }

}
