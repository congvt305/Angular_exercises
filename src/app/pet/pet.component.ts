import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  imgSize = 1000;
  petName = 'Puppy';
  // tslint:disable-next-line:max-line-length
  petImg = 'https://kenh14cdn.com/thumb_w/640/2019/2/24/3561716420480213454575853861059020806684672n-15510057259571546306615-crop-15510061168661940761135.jpg';
  constructor() { }
  changeImgSize(event) {
    console.log(event.target.value);
    this.imgSize = event.target.value;
  }
  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImg = image;
  }

  ngOnInit(): void {
  }

}
