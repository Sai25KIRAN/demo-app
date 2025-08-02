import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent {
constructor(private route: ActivatedRoute) {}

isShow = false;
isShow1 = false;
ngOnInit(): void {
  // this.route.queryParams.subscribe(params => {
  //   if(params['id'] == 1 ){ this.isShow = true; this.isShow = false; }
  //   else if(params['id'] == 2 ){ this.isShow1 = true; this.isShow = false; }
  // });
  var id = this.route.snapshot.paramMap.get('id')?.toString();
     if(id == "1" ){ this.isShow = true; this.isShow1 = false; }
    else if(id == "2" ){ this.isShow1 = true; this.isShow = false; }
}

}
