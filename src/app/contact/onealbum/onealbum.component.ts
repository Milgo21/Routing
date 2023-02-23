import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-onealbum',
  templateUrl: './onealbum.component.html',
  styleUrls: ['./onealbum.component.css']
})
export class OnealbumComponent {
  album:any;
  albumid:any;
  constructor(private activatedRoute:ActivatedRoute, private service:ProductsService){

    // this.albumid = this.activatedRoute.snapshot.paramMap.get('id')
    this.albumid = this.activatedRoute.snapshot.params[('id')];
    this.album =this.service.Albums.find(x=> x.id == this.albumid)
    console.log(this.album);
    
  }

}
