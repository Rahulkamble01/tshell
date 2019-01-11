import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Topic } from '../topic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { SkillmodalComponent } from '../skillmodal/skillmodal.component';
import { AuthService } from '../auth.service';
import { Skill } from '../skill';
import { SkillserviceService } from '../skillservice.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, merge, filter, isEmpty } from 'rxjs/operators';
import { EditskillmodalComponent } from '../editskillmodal/editskillmodal.component';
import { ConfirmationDialogService } from '../confirmation-dialog.service';
import { ReferenceSkillModelComponent } from '../reference-skill-model/reference-skill-model.component';
import { moduleDef } from '@angular/core/src/view';


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
  referenceSkill: any = [];
  dependentSkill: any = [];
  toppers: any[] = [];
  graphData: any[] = [];
  topics: Array<Topic>;
  userRole: any;
  Role: any;
  showEdit = false;
  showActive = false;
  showAddskill = false;
  userLoggedInn: any;
  imageUrl: string = null;
  fileToUpload: File = null;
  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, public router: Router, private modalService: NgbModal, public authService: AuthService, private skillService: SkillserviceService, private confirmationDialogService: ConfirmationDialogService) {

  }
  ngOnInit() {
    this.skillService.getAll().subscribe(data => {
      this.allSkills = data;
      console.log(this.allSkills);
    });

    /* this.userRole = this.authService.getRole();
    if (this.userRole !== undefined || this.userRole !== 'Learner') {
      this.userRole = 0;
    }
    if (this.userRole !== 'Learner' || this.userRole !== 'Admin' || this.userRole !== 'SME') {
      this.userLoggedInn = true;
    } */

    console.log("Role of user12: " + this.authService.role);
    this.Role = this.authService.role;
    this.userLoggedInn = this.authService.loggedIn;
    console.log("is he logged in:  " + this.userLoggedInn);

    if (this.Role === undefined) {
      this.showEdit = false;
      this.showActive = false;
      this.showAddskill = false;

    } else {
      if (this.Role.toUpperCase() === "Learner".toUpperCase()) {
        this.showEdit = false;
        this.showActive = false;
        this.showAddskill = false;
      }
      if (this.Role.toUpperCase() === "admin".toUpperCase()) {
        this.showEdit = true;
        this.showActive = true;
        this.showAddskill = true;
      }
      if (this.Role.toUpperCase() === "sme".toUpperCase()) {
        this.showEdit = true;
        this.showActive = false;
        this.showAddskill = true;
      }
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
    const modalRef = this.modalService.open(EditskillmodalComponent);
    modalRef.componentInstance.item = item;
  }

  addSkillModel() {
    const modalRef = this.modalService.open(SkillmodalComponent);
  }

  formatter = (x: { name: string }) => x.name;
  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    merge(this.focus$),
    merge(this.click$.pipe(filter(() => !this.instance.isPopupOpen()))),
    map(term =>
      // tslint:disable-next-line:no-unused-expression
      (term === '' ? []
        // this.keyPressing(this.model).filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()))
        // : this.allSkills.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 5)
        : this.allSkills.filter(v => new RegExp(term, 'gi').test(v.name)).slice(0, 5)
        // : console.log(this.allSkills.filter(v => v.name.toLowerCase()))
      )
    )
  )

  itemSelected($event, selectedSkill) {
    this.toppers = [];
    this.dependentSkill = [];
    this.referenceSkill = [];
    selectedSkill = this.skillService.getSkill();
    console.log(selectedSkill);
    console.log($event);

    if ($event === undefined) {
      this.skills = this.skillService.getSkill();
      this.name = this.skills.name;
      console.log('1');
    } else if (selectedSkill !== undefined && selectedSkill.id === $event.item.id) {
      this.skills = this.skillService.getSkill();
      this.name = this.skills.name;
      console.log('12');
    } else {
      this.skills = $event.item;
      this.name = $event.item.name;
      console.log('123');
    }
    // if (selectedSkill !== undefined && selectedSkill.id === $event.item.id) {
    //   console.log('kfjgaflsdgfklsdjf');
    //   this.skills = this.skillService.getSkill();
    // } else if () {

    // } else {
    //   this.skills = $event.item;
    // }
    this.skillService.updateSearch(this.skills.id).subscribe();
    this.skillService.getSkillTopper(this.skills.id).subscribe(data => {
      this.toppers = data;
    });
    this.skillService.getReferenceSkill(this.skills.id).subscribe(data => {
      data.forEach(element => {
        if (element.classifier === 'pre') {
          this.dependentSkill.push(element);
        } else {
          this.referenceSkill.push(element);
        }
      });
    });
    this.skillService.setSkill(undefined);
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  editRef(item, control) {
    const modalRef = this.modalService.open(ReferenceSkillModelComponent);
    console.log("inside ediref" + control);
    const dependentSkills = [];
    item.forEach(element => {
      if (control === 1) {
        if (element.classifier === 'post') {
          dependentSkills.push(element);
        }
      }
      if (control === 2) {
        if (element.classifier === 'pre') {
          dependentSkills.push(element);
        }
      }
    });
    modalRef.componentInstance.allReferenceSkills = dependentSkills;
    modalRef.componentInstance.allSkills = this.allSkills;
    modalRef.componentInstance.skill = this.skills;
    modalRef.componentInstance.type = control;

    // modalRef.result.then((result) => {
    //   console.log('hellllo');
    // }, (reason) => {
    //   console.log(reason);
    // });

    modalRef.componentInstance.skillEvent.subscribe(async $e => {
      this.itemSelected(undefined, $e);
    });
    // this.itemSelected(undefined, this.skillService.getSkill());
  }


  async gotoLogin() {
    console.log("it will go to login");
    // setTimeout(() => this.router.navigate(['/login']), 3000);
    await this.confirmationDialogService.login(`Not a User of tShell!`, `You have To login before you can take test!`)
      .then((confirmed) => {
        if (confirmed) {
          console.log('User confirmed:', confirmed);
          this.router.navigate(['/login']);
        } else {
          console.log('User confirmed:', confirmed);
          return;
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  deleteReferenceSkill(item) {
    console.log(item.id);
    // tslint:disable-next-line:max-line-length
    this.confirmationDialogService.confirm(`Delete "${item.referenceSkill.name}"`, `Do you really want to delete ${item.referenceSkill.name} from ${item.skill.name}?`)
      .then((confirmed) => {
        if (confirmed) {
          console.log('User confirmed:', confirmed);
          this.skillService.deleteReferenceSkill(item.id).subscribe();
          this.skillService.setSkill(this.skills);
          return this.itemSelected(undefined, this.skills);
        } else {
          console.log('User confirmed:', confirmed);
          return;
        }
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    this.ngOnInit();
  }
}
