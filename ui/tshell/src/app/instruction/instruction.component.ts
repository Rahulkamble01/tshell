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
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', 'white');

  }

  startAssesment() {
    this.router.navigate(['/assesment']);
  }
}
