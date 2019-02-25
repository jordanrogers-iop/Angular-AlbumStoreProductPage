import { Component, OnInit, Input } from '@angular/core';
import { Album } from "../album";

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  @Input() albumInfo: Album;

  constructor() { }

  ngOnInit() {
  }

}
