import { Component, OnInit } from '@angular/core';
import { IStore } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-all-stores',
  templateUrl: './all-stores.component.html',
  styleUrls: ['./all-stores.component.css']
})
export class AllStoresComponent implements OnInit {
  Stores!: Array<IStore>;
  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
    this._storeService.Getstores()
      .subscribe((response:any) => {
        console.log(response);
        this.Stores = response;
      }),
      console.log(this.Stores)
  }

}
