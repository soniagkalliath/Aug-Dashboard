import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title1="New User"
  title2="User Engagement"
  title3="User Referals"
  
  constructor() { }

  ngOnInit(): void {
  }

}
