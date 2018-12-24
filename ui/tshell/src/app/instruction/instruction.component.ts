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
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private elementRef: ElementRef, private renderer: Renderer2, private service: ExitAssesmentService) { }
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', 'white');
    this.service.getQuestionId().subscribe(data => {
       this.questionId = data;
      console.log(this.questionId);
    });
  }
  startAssesment() {
    this.router.navigate(['/assesment']);
  }
}
