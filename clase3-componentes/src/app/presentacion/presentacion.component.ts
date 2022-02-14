import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {


  @Input()
  name: string ='';
  @Input()
  ocupation: string = '';
  @Input()
  bio: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
