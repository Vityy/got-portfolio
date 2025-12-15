import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CountriesModel } from '../../shared/models/countries.model';

@Component({
  selector: 'app-countries',
  imports: [RouterOutlet],
  templateUrl: './countries.html',
  styleUrl: './countries.scss',
})
export class Countries implements OnInit {
  protected currentTitle: string = '';
  protected countries: CountriesModel[] = [];
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
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

  protected goToCountryDetais(id: number){
    this.router.navigate(['/countries', id]);
  }
}
