import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBService } from '../db.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  number:number;
  student: any;
  todos: any;
  constructor(private router: Router, private dbService: DBService) { }

  ngOnInit() {
    this.dbService.initDB();
  }

  sumbit() {
    // if(!this.number){
    //   return;
    // }
     this.dbService.getDetails().then(todos => this.todos = todos);
     console.log(this.todos);
     this.router.navigate(['landing']);
  }

}
