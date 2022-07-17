import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'store-sidebar',
  templateUrl: './Storesidebar.component.html',
  styleUrls: ['./Storesidebar.component.css']
})
export class StoreSidebarComponent implements OnInit {

  @Input() username!:string | null

  @Input() email!:string | null
  constructor() { }

  ngOnInit(): void {
  }

}