import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carousel } from '../../ui/carousel/carousel';
import { Navbar } from '../../ui/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
