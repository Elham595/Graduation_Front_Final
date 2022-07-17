import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FabricStoreDetails, IFabricStore, IFabricStoreDetails, IStore } from 'src/app/models/store';
import { ColorService } from 'src/app/Services/color.service';
import { FabricService } from 'src/app/Services/fabric.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-each-store',
  templateUrl: './each-store.component.html',
  styleUrls: ['./each-store.component.css']
})
export class EachStoreComponent implements OnInit {
  username!: string | null;
  storeid!: string | null;
  Store?: IStore | null
  FabricStore?:Array<IFabricStore>|null;
  fabrics!:Array<IFabricStoreDetails>;
  constructor(private _activatedRoute: ActivatedRoute, private _StoreServices: StoreService,private colorService: ColorService,private fabricService: FabricService) { }

  ngOnInit(): void {
    this.fabrics = new Array<IFabricStoreDetails>();
    this._activatedRoute.paramMap.subscribe(prams => {

      this.username = prams.get('userName');
      
      this._StoreServices.GetStoresProfile(this.username)
      .subscribe(store=>
      {
        console.log(store);
        this. Store = store;
        this._StoreServices.GetStoreFabric(this.Store.storeId)
        .subscribe(storefabric=> {
          console.log('storeFabric',storefabric );
          this.FabricStore = storefabric;
          this.FabricStore.forEach(async f =>{
            var color = await this.colorService.getColorById(f.colorId).toPromise();
            var fabric = await this.fabricService.getFabricById(f.fabricId).toPromise();
            if(color && fabric)
              this.fabrics.push(new FabricStoreDetails(fabric.fabricName,color.colorName,f.price));
          })
          console.log(this.Store);
        });
      });
      
    });

    
  }

}
