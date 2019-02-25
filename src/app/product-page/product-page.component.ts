import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService, private route: ActivatedRoute ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id') - 1;
    this._productService.getAlbum(id)
      .subscribe( response => {
        console.log(response[id]);
        this.albumInfo = response[id];
      } )
  }

}
