import { Component, OnInit } from '@angular/core';
import { HttpRestFullService } from '../../services/http-rest-full.service'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  newTask:any



  constructor(private _httpService: HttpRestFullService) { }

  ngOnInit(): void {
    this.newTask = { title: "", description: "", completed: true };
  }

  onNewTask() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {

    });
  }

}
