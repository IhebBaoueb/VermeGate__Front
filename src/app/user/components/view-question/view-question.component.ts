import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../user-services/question-service/question.service';
import { ActivatedRoute } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/storage-service/local-storage.service';
import { AnswerService } from '../../user-services/answer-services/answer.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent  {

  questionId: number = this.activatedRoute.snapshot.params["questionId"];
  question : any ;
  validateForm !: FormGroup ;

  
  constructor(
    private questionService:QuestionService,
    private answerService : AnswerService ,
    private activatedRoute: ActivatedRoute,
    private fb : FormBuilder,
    private snackBar : MatSnackBar

    ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      body : [null , Validators.required]
    })
    this.getQuestionById();
  }

  
  getQuestionById() {
    this.questionService.getQuestionById(this.questionId).subscribe(
      (res) => {
        console.log(res);
        this.question = res.questionDto;

      }
    )
  }

  addAnswer () {
    console.log(this.validateForm.value);
    const data = this.validateForm.value;
    data.questionId = this.questionId;
    data.userId = LocalStorageService.getUserId();
    console.log(data);
    this.answerService.postAnswer(data).subscribe (
      (res) =>  {
        console.log(res);
        this.snackBar.open("Answer posted successfully","close", {duration: 5000});

      }
      
    )
  }


} 
