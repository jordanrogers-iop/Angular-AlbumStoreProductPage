import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo: Album;

  constructor( private _productService: ProductService, private route: ActivatedRoute ) {
    console.log(typeof(this.route.snapshot.paramMap.get('id')));
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id') - 1;
    this._productService.getAlbum(id)
      .subscribe( response => {
        console.log(response[id]);
        this.albumInfo = response[id];
      } )
  }

}
