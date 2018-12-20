import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-viewlearner',
  templateUrl: './viewlearner.component.html',
  styleUrls: ['./viewlearner.component.css']
})
export class ViewlearnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageUrl :  string  = "https://www.loopconnect.net/images/main/avatar.png";
  fileToUpload :  File  =  null;

  handleFileInput(file :  FileList) {
    this.fileToUpload  =  file.item(0);

    var  reader  =  new  FileReader();
    reader.onload  = (event: any)  =>  {
      this.imageUrl  =  event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);



  }



}
