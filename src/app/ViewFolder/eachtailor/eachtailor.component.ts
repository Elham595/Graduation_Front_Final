import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITailor } from 'src/app/models/tailor-model';
import { TailorService } from 'src/app/services/tailorserv.service';


@Component({
  selector: 'app-eachtailor',
  templateUrl: './eachtailor.component.html',
  styleUrls: ['./eachtailor.component.css']
})
export class EachtailorComponent implements OnInit {

  username!: string | null;

  tailor!: ITailor

  constructor(private _activatedRoute: ActivatedRoute, private tailorservService: TailorService) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((prams:any) => {

      this.username = prams.get('username');

      this.tailorservService.GetTailorProfile(this.username)
        .subscribe((tailor:any) => {
          console.log(tailor);
          this.tailor = tailor;
          console.log(this.tailor);

        });
    });

  }

}