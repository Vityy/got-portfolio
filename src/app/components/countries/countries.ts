import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CountriesModel } from '../../shared/models/countries.model';

@Component({
  selector: 'app-countries',
  imports: [],
  templateUrl: './countries.html',
  styleUrl: './countries.scss',
})
export class Countries implements OnInit {
  protected currentTitle: string = '';
  protected countries: CountriesModel[] = [];
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);

  ngOnInit(): void {
    this.getCountries();
    this.currentTitle = this.titleService.getTitle();
  }

  protected changeTitle(){
    this.titleService.setTitle('Pays');
    this.currentTitle = this.titleService.getTitle();
  }

  protected getCountries(){
    this.activatedRoute.data.subscribe((data) => {
      this.countries = data['countries'];
    })
  }
}
