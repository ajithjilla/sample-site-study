import { Component, OnInit } from '@angular/core';
import { DBService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';

  constructor(private dbservice: DBService) {}
  
  ngOnInit() {
    this.dbservice.initDB();
  }
}
