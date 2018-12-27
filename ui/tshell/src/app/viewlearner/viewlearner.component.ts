import { Component, OnInit } from '@angular/core';
import { ViewlearnerService } from '../viewlearner.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-viewlearner',
  templateUrl: './viewlearner.component.html',
  styleUrls: ['./viewlearner.component.css']
})
export class ViewlearnerComponent implements OnInit {

  user: any;
  userDetails: any = {};
  assessmentsData: any[] = [];
  constructor(private viewLearnerService: ViewlearnerService, private service: AuthService) { }

  ngOnInit() {
    if (this.service.employeeLoggedIn != 0) {
      this.viewLearnerService.getUserDetails(this.service.employeeLoggedIn).subscribe(
        data => {
          this.userDetails = data;

          console.log(data);

        });
      this.viewLearnerService.getUserAssessment(this.service.employeeLoggedIn).subscribe(
        data => {

          this.assessmentsData = data;
          console.log(this.assessmentsData);
          this.assessmentsData.forEach(element => {
            console.log(element);
          });

        });

      
    }
  }


  getUserData(employeeId) {
    // console.log("inside the getUserData" +employeeId);
    // console.log("employeeId = "+employeeId);
    //  this.viewLearnerService.getUserDetails(employeeId).subscribe(
    //   data => {

    //     this.user = data;
    //     console.log(this.user);
    //   })
  }

  imageUrl: string = "https://www.loopconnect.net/images/main/avatar.png";
  fileToUpload: File = null;

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);



  }



}
