import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-designer-sidebar',
  templateUrl: './designer-sidebar.component.html',
  styleUrls: ['./designer-sidebar.component.css']
})
export class DesignerSidebarComponent implements OnInit {

  @Input() username!:string | null
  @Input() email!:string| null
  constructor() { }

  ngOnInit(): void {
  }

}
