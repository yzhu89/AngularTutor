import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';
import { Recipe } from '../../shared/recipe.model';

@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    // serverId = 10;
    materialName1 = '空空的锅';
    materialName2 = '空空的锅';
    haveRecipe = false;
    recipeName = '黑暗料理';
    serverStatus = 'offLine';
    counter = 0;
    isLogin = false;
    userName: string;
    students: Student[] = [new Student('Bill Gates', 'Computer Science'),
                           new Student('Steve Jobs', 'Computer Science'),
                           new Student('Elon Musk', 'Computer Science')];
    recipes: Recipe[] = [new Recipe('西红柿', '鸡蛋', '西红柿炒蛋'),
                         new Recipe('芹菜', '香干', '芹菜香干'),
                         new Recipe('辣椒', '土豆丝', '辣炒土豆丝')];

    // getDishName() {
    //   return this.dishName;
    // }
    getServerStatus() {
      return this.serverStatus;
    }

    counterPlus() {
     this.counter ++;
    }

    resetCounter() {
      this.counter = 0;
    }

    checkRecipe() {
      this.haveRecipe = true;
      for (let i = 0; i < this.recipes.length; i++) {
        if ((this.recipes[i].name1 === this.materialName1 && this.recipes[i].name2 === this.materialName2)
            || (this.recipes[i].name1 === this.materialName2 && this.recipes[i].name2 === this.materialName1)) {
          this.recipeName = this.recipes[i].dishName;
        }
      }
    }

    clean() {
      this.haveRecipe = false;
      this.recipeName = '黑暗料理';
    }

    login() {
      this.isLogin = true;
    }

    signOut() {
      this.isLogin = false;
    }

    // Event Binding
    onUpdateUserName(event: Event) {
      this.userName = (<HTMLInputElement>event.target).value;
    }
}
