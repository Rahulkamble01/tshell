import { Component, OnInit } from '@angular/core';
import { ViewprofileService } from '../viewprofile.service';
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  user: any;
  userDetails: any = {};
  assessmentsData: any[] = [];
  assessmentsForQn:any[]=[];
  emailPattern = "^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{3,5}$";
  updateStatus: any;
 
  constructor(private viewprofileService: ViewprofileService, private service: AuthService,private fb: FormBuilder) { }
  form1 :any;
  ngOnInit() {

    this.updateStatus = false;
    this.form1 = new FormGroup({
      employeeId: new FormControl(''),
  
      name: new FormControl('',[
        , Validators.required,
         Validators.maxLength(45)
       ]),
  
      email: new FormControl('',[
        , Validators.required,
        Validators.pattern(this.emailPattern)]),
        
      
    });
   
    
    if (this.service.employeeLoggedIn != 0) {
      this.viewprofileService.getUserDetails(this.service.employeeLoggedIn).subscribe(
        data => {
          this.userDetails = data;
          let json =({
            employeeId:this.userDetails.employeeId,
            name:this.userDetails.name,
            email:this.userDetails.email,
            
          });
          console.log("json data : = "+ json);
          this.form1.patchValue(json);
          console.log("form control data set : = "+this.form1.value);

          console.log(data);

        });
      this.viewprofileService.getUserAssessment(this.service.employeeLoggedIn).subscribe(
        data => {
          this.assessmentsForQn=data;
          for(let i=0;i<data.length;i++){
            let skillPresent=false;
            for(let j=0;j<this.assessmentsData.length;j++){
              if(this.assessmentsData[j].skillname==data[i].skill.name){
                skillPresent=true;
                this.assessmentsData[j].assessments.push(data[i]);
              }
            }
            if(!skillPresent){
              let skill={
                skillname:data[i].skill.name,
                assessments:[data[i]],                
              }
              this.assessmentsData.push(skill);
            }
          }          
          console.log(this.assessmentsData);
          this.assessmentsData.forEach(element => {
            console.log(element);
          });

        });

      
    }
  }

  save(){
    //let updateStatus:any=true;
    console.log("1st Status"+this.updateStatus);
   /*  this.form1.patchValue({
      employeeId: this.form1.value.employeeId,
      name:this.form1.value.name,
      email:this.form1.value.email
    }); */
    console.log(this.form1.value);
    /* let json = JSON.stringify({
      name:this.form.controls['name'].value,
      email:this.form.controls['email'].value,
      employeeId:this.form.controls['employeeId'].value
    }); */
    this.viewprofileService.save(this.form1.value).subscribe(
      data => {
        console.log(data);
        this.viewprofileService.getUserDetails(this.service.employeeLoggedIn).subscribe(
          data => {
            this.userDetails = data;
  
            console.log(data);
             this.updateStatus = true;
            
          });
      }
    );
    
    //this.updateStatus = false;
  }

/* 
  getUserData(employeeId) {
    console.log("inside the getUserData" +employeeId);
    console.log("employeeId = "+employeeId);
     this.viewprofileService.getUserDetails(employeeId).subscribe(
      data => {
            
        this.user = data;
        console.log(this.user);
      })
  } */

  imageUrl: string = "https://www.loopconnect.net/images/main/avatar.png";
  fileToUpload: File = null;

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;

    }
    let by=reader.readAsDataURL(this.fileToUpload);


  }

  modalOpen(){
    this.updateStatus=false;
    this.updateStatus='';
  }

}
