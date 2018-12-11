import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

declare var countdown: any;

@Component({
  selector: 'app-exit-assesment',
  templateUrl: './exit-assesment.component.html',
  styleUrls: ['./exit-assesment.component.css']
})
export class ExitAssesmentComponent implements OnInit {
  title = 'cognilearn';

  // tslint:disable-next-line:max-line-length
  questions: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
  // i: number;
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      countdown(2);
    });


    $(document).ready(function () {
      $('#myModalBtn').click(function () {
        $('#myModal .modal-body').html($('#sideNav').html());
        $('#myModal').modal('show');
      });
    });


  }





}
