import { Component, OnInit } from '@angular/core';
import { ImageService } from '../providers/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  constructor(private imageService:ImageService ) { }
  
  ngOnInit() {
  }

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data);
  }

  handleError(error) {
    console.log(error);
  }

  searchImages(query: string){
    this.searching = true;
    return this.imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => {
        this.searching = false;
        console.log('Request Complete!')}
    );
  }

  openUrl(link) {
    window.open(link, "_blank");
  }

}
