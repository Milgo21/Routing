import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {

  constructor( private route:Router, private activatedRoute:ActivatedRoute){}



  navigateHome(){
    this.route.navigate(['Home']);
    // this.route.navigate(['Home'],{relativeTo:this.activatedRoute});
    }



}
