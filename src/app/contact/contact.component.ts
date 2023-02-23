import { Component } from '@angular/core';
import { Album } from '../interface';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  Albums:Album[]=[];
  constructor( private service:ProductsService){
    this.Albums = this.service.Albums
  }
}
