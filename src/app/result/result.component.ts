import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  results: any;
  constructor() { }

  ngOnInit(): void {
    this.result();
  }
  result() {
    this.results = [
      {
        "subjectCode": "ppy101",
        "Internal": 15,
        "markSecured": "40",
        "maximumMark": 100,
        "result": "P"
      },
      {
        "subjectCode": "ppy102",
        "Internal": 19,
        "markSecured": "35",
        "maximumMark": 100,
        "result": "P"
      },
      {
        "subjectCode": "ppy103",
        "Internal": 15,
        "markSecured": "56",
        "maximumMark": 100,
        "result": "P"
      },
      {
        "subjectCode": "ppy104",
        "Internal": 15,
        "markSecured": "36",
        "maximumMark": 100,
        "result": "P"
      }
    ]
  }
}
