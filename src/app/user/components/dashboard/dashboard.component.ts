
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../user-services/question-service/question.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  questionId: number = this.activatedRoute.snapshot.params["questionId"];
  questions: any[] = [] ;
  pageNum:number =0 ;
  total !: number ;
  question : any ;
  searchForm!: FormGroup;


  constructor(
    private service : QuestionService ,
    private questionService:QuestionService,
    private activatedRoute: ActivatedRoute,
    private fb : FormBuilder


    ) {}

  ngOnInit(){
    this.getAllQuestions();
    this.searchForm = this.fb.group({
      questionId: ['', Validators.required], // Assurez-vous de définir des validateurs appropriés.
    });

  }

  getAllQuestions() {
    this.service.getAllQuestion(this.pageNum).subscribe((res) => {
      console.log(res);
      this.questions= res.questionDtoList;
      this.total= res.totalPages * 5 ;
    })
  }

  pageIndexChange(event:any) {
    this.pageNum = event.pageIndex;
    this.getAllQuestions();
  }

  
  
  
  

}
