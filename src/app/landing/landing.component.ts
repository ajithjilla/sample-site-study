import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../db.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  name: any;
  regNum: number;
  prevGpa: any;
  department: string;
  email: any;
  year: number;
  attandance:number;
  major:string;
  todos: any;
  constructor(private route: Router, private dbService: DBService) { }

  ngOnInit() {
    this.studentDetail();
  }

  async studentDetail() {
    await this.dbService.getDetails().then(todos => this.todos = todos);
     console.log(this.todos);
     this.todos = this.todos[0];
     console.log(this.todos.Name);
  }

  result() {
    this.route.navigate[('result')];
  }

}
