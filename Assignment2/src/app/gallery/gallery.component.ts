import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  //title:string="Gallery Image"
  gallery=[
    {data:"Gallery Image",color:"blue"},
    {data:"Gallery Image",color:"green"},
    {data:"Gallery Image",color:"orange"},
    {data:"gallery image",color:"red"}
  ]
}
