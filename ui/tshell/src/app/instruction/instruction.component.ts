import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ExitAssesmentService } from '../exit-assesment.service';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  questionId: any;
  result: any;
  taken: any;
  len: any;
  samplearray: any = [];
  // tslint:disable-next-line:max-line-length

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private elementRef: ElementRef, private renderer: Renderer2, private service: ExitAssesmentService) { }
  ngOnInit() {
    for (let i = 1; i < 100; i++) {
      this.samplearray.push(i);
    }
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', 'white');
    this.service.getQuestionId(1).subscribe(data => {
       this.questionId = data;
      console.log(this.questionId);
      this.getRandom(this.questionId, 40);
      console.log(this.result);
    });
  }

   getRandom(arr, n) {
    this.result = new Array(n),
        this.len = arr.length,
        this.taken = new Array(this.len);
    if (n > this.len) {
        throw new RangeError("getRandom: more elements taken than available");
    }
    while (n--) {
        const x = Math.floor(Math.random() * this.len);
        this.result[n] = arr[x in this.taken ? this.taken[x] : x];
        this.taken[x] = --this.len in this.taken ? this.taken[this.len] : this.len;
    }
    return this.result;
}

  startAssesment() {
    this.router.navigate(['/assesment']);
  }
}
