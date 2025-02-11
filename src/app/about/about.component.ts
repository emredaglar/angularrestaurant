import { Component } from '@angular/core';
import { About } from '../_models/about';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
about:About = {id:1,title:'Başlık',description:'açıklama'}
about2:About = {id:2,title:'Başlık2',description:'açıklama2'}
about3:About = {id:3,title:'Başlık3',description:'açıklama3'}
about4:About = {id:4,title:'Başlık4',description:'açıklama4'}



abouts:About[]= [this.about,this.about2,this.about3, this.about4]
}
