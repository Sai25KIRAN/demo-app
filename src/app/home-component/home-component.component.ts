import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

   constructor(private router: Router){}
  isShow = false;
  isShow1 = false;

  goToImagePage() 
  {
    this.isShow =true;
    this.isShow1 = false;
    //this.router.navigate(['/image-page']);
    this.router.navigate(['/image-page',1]);
  }

  goToImagePage1() 
  {
    this.isShow1 =true;
    this.isShow =false;
    this.router.navigate(['/image-page',2]);
  }

  ShowAlert(){
    alert('HI');
  }
}
