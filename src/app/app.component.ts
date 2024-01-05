import { Component } from '@angular/core';
import { BoardsService } from './services/boards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ngRx-practice';

  boards$:any;

  constructor(private boardsService: BoardsService){
  }
 



  get_boards(){
   


    this.boardsService.getWorkspaceById(1).subscribe(res=>{
      console.log("workspaces:",res);
      
    })
    this.boardsService.getAllBoards(1).subscribe(res=>{
      console.log("boards:",res);
      
    })
    this.boardsService.getAllTodoLists(1,1).subscribe(res=>{
      console.log("todolist:",res);
    })
    this.boardsService.getAllTodos(1,1).subscribe(res=>{
      console.log("todos:",res);
      
    })

  }

}
