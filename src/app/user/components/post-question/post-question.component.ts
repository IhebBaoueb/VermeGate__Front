import { Component, OnInit, inject } from '@angular/core';
import { QuestionService } from '../../user-services/question-service/question.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatChipEvent, MatChipInputEvent} from '@angular/material/chips'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.scss']
})
export class PostQuestionComponent  {
 isSubmitting!: boolean ;
 validateForm!:FormGroup;



  constructor(private service: QuestionService,
    private fb:FormBuilder ,
    private snackBar : MatSnackBar) { }

  ngOnInit() {
    this.validateForm= this.fb.group({
      title : ['', Validators.required],
      body : ['', Validators.required],
      tags : ['', Validators.required],


    }) 
  }

  postQuestion() {
    console.log(this.validateForm.value);
    this.service.postQuestion(this.validateForm.value).subscribe((res)=> {
      console.log(res);
      if (res.id!=null) {
        this.snackBar.open("Question posted successfully","close", {duration: 5000});

      }else {
        this.snackBar.open("Something went wrong", "close", {duration: 5000});
      }
    })
  } 

}

