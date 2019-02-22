import { Component, OnInit } from '@angular/core';
import { Album } from "../album";
import { ProductService } from "../product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  albumInfo: Album;

  constructor( private _productService: ProductService, private route: ActivatedRoute ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id') - 1;
    this._productService.getAlbum(id)
      .subscribe( response => {
        this.albumInfo = response[id];} )
  }

}
