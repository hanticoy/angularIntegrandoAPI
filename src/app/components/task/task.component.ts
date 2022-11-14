import { Component, OnInit, Input } from '@angular/core';
import { HttpRestFullService } from '../../services/http-rest-full.service'


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskToShow: any;
  editTask:any;
  formEdit:any;

  constructor(private _httpService: HttpRestFullService) { }

  ngOnInit(): void {
    this.editTask = [{ title: "", description: "", completed: true }];
  }

  onEditTask() {
  // console.log('tarea a editar:' + this.taskToShow);
    this.editTask = this.taskToShow;

    let observable = this._httpService.updateTask(this.editTask);
    observable.subscribe(data => {

    });
  }
}
