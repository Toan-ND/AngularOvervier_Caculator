import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'nasus';
  petImage = 'https://camnang24h.net/wp-content/uploads/2019/05/hinh-nen-tuong-Nasus-trong-lien-minh-huyen-thoai-1.jpg';

  setName(name) {
    this.petName = name;
  }

  setImage(image) {
    this.petImage = image;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
