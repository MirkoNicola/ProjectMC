import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DatabaseService } from 'src/app/dBase/database.service';
import { Data, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | undefined;
  firebaseError: string | undefined;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private route: Router,
    private mainService: ServiceService,
    private dbService: DatabaseService
    
  ) {
    
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        FirstName: new FormControl(""),
        LastName: new FormControl(""),
        Username: new FormControl(""),
        Email:new FormControl("",[Validators.required, Validators.email]),
        Age: new FormControl(""),
        Password: new FormControl(""),
        ConfirmPassword: new FormControl("")
      }
    )
  }

}
