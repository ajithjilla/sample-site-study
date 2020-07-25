import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.studentDetail();
  }

  studentDetail() {
    this.name = "Nimisha",
    this.regNum = 12345,
    this.prevGpa = "5",
    this.department = "BA",
    this.email= "nimishajio@gmail.com",
    this.year = 1,
    this.attandance = 90,
    this.major = " BA History"
  }

  result() {
    this.route.navigate[('result')];
  }

}
