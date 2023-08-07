import { Component } from '@angular/core';
import {faHome,faSearch,faArchive,faFileSignature,
  faAddressBook,faUserMd,faDesktop} from '@fortawesome/free-solid-svg-icons/';
  import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
  import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})


export class StudentPageComponent {
  



  faSearchengin=faSearchengin;
  studentList: any[] = [
    {  name: 'Amani' ,email:'Amani@gmil.com',marks:100},
    {  name: 'Reem' ,email:'Reem@gmil.com',marks:30},
    {  name: 'Ali',email:'Ali@gmil.com' ,marks:60},
    {  name: 'sama',email:'sama@gmil.com' ,marks:44},
    {  name: 'layan',email:'layan@gmil.com' ,marks:77},
    {  name: 'muna',email:'muna@gmil.com' ,marks:53},
  ]

  marks=50;
 
}
