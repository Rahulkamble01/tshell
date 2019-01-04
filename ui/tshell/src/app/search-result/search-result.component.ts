import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Topic } from '../topic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { SkillmodalComponent } from '../skillmodal/skillmodal.component';
import { AuthService } from '../auth.service';
import { Skill } from '../skill';
import { SkillserviceService } from '../skillservice.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, merge, filter } from 'rxjs/operators';
import { EditskillmodalComponent } from '../editskillmodal/editskillmodal.component';
import { ConfirmationDialogService } from '../confirmation-dialog.service';


declare var abc: any;

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultComponent implements OnInit {
  name: any;
  model: any;
  skills: any = [];
  allSkills: Skill[] = [];
  toppers: any[] = [];
  graphData: any[] = [];
  topics: Array<Topic>;
  userRole: any;
  userLoggedInn: any;
  imageUrl: string = null;
  fileToUpload: File = null;
  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal, public authService: AuthService, private skillService: SkillserviceService, private confirmationDialogService: ConfirmationDialogService) {

  }
  ngOnInit() {
    // this.skillService.getAll().subscribe(data => {
    //   this.allSkills = data;
    //   console.log(this.allSkills);
    // });

    this.userRole = this.authService.getRole();
    if (this.userRole !== undefined || this.userRole !== 'Learner') {
      this.userRole = 0;
    }
    if (this.userRole !== 'Learner' || this.userRole !== 'Admin' || this.userRole !== 'SME') {
      this.userLoggedInn = true;
    }

  }

  toggllingSkill(skill) {
    let str: string;
    if (skill.active) {
      str = 'Deacitvate';
    } else {
      str = 'Activate';
    }

    this.confirmationDialogService.confirm(`${str} of "${skill.name}"`, `Do you really want to ${str} Skill ?`)
      .then((confirmed) => {
        if (confirmed) {
          console.log('User confirmed:', confirmed);
          if (str === 'Activate') {
            return skill.active = 'active';
          } else {
            return skill.active = 'deactive';
          }
        } else {
          console.log('User confirmed:', confirmed);
          return;
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  editSkillModel(item) {
    console.log(item);
    const modalRef = this.modalService.open(EditskillmodalComponent, { centered: true });
    modalRef.componentInstance.item = item;
  }

  addSkillModel() {
    const modalRef = this.modalService.open(SkillmodalComponent, { centered: true });
  }

  formatter = (x: { name: string }) => x.name;
  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    merge(this.focus$),
    merge(this.click$.pipe(filter(() => !this.instance.isPopupOpen()))),
    map(term => (term === '' ? [] : this.keyPressing(this.model).filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()))
      // : this.allSkills.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    ))
    // map(term => term === '' ? []
    //   : this.allSkills.filter(v => new RegExp(term, 'gi').test(v.name)).slice(0, 100),
    // ),
    // map(term => term === '' ? [])

  )
  keyPressing(model) {
    console.log(model);
    let allSkills1: Skill[] = [];
    this.skillService.getAll().subscribe(data => {
      allSkills1 = data;
      console.log(data);
    });
    console.log(allSkills1);
    return allSkills1;
  }





  itemSelected($event) {
    this.skills = $event.item;
    this.name = $event.item.name;
    this.skillService.updateSearch($event.item).subscribe();
    this.skillService.getSkillTopper($event.item.id).subscribe(data => {
      this.toppers = data;
      console.log(data);
    });
    // this.skillService.getGraphDataOfSkill($event.item.name).subscribe(data => {
    //   this.graphData = data;
    // });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);



  }

}



// const tooltip = d3.select("#graphID")
// .append("div")
// .attr("class", "tooltip")
// .style("opacity", 0);

// d3.json(this.graphData, function (error, graph) {
// if (error) { throw error; }
// const svg = d3.select('svg'),
//   width = +svg.attr('width'),
//   height = +svg.attr('height');

// const simulation = d3.forceSimulation()
//   .nodes(graph.nodes)
//   .force('link', d3.forceLink().id(d => d.id))
//   .force('charge', d3.forceManyBody())
//   .force('center', d3.forceCenter(width / 2, height / 2))
//   .on('tick', ticked());

// simulation.force('link')
//   .links(graph.links);

// const R = 6;


// });
