import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup
  constructor(private router:Router,private user:UserService) {
    this.signupForm = new FormGroup({
      "firstname":new FormControl('',Validators.required),
      "lastname":new FormControl('',Validators.required),
      "email" : new FormControl('',Validators.required),
      "password" : new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
  }
  submit()
  {
    console.log(this.signupForm.value)
    this.user.register(this.signupForm.value).subscribe((data)=>{
      console.log(data)
      this.router.navigate(["/login"])
    })

  }

}
