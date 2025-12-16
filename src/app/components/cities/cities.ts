import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CitiesModel} from '../../shared/models/cities.model';
import {CitiesList} from './components/cities-list/cities-list';

@Component({
  selector: 'app-cities',
  imports: [
    CitiesList
  ],
  templateUrl: './cities.html',
  styleUrl: './cities.scss',
})
export class Cities implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);

  protected cities : CitiesModel[] = [];
  protected currentTitle = '';

  ngOnInit() {
    this.getAllCities();
    this.getTitle();
  }

  private getAllCities () {
    this.activatedRoute.data.subscribe((data) => {
      this.cities = data['cities'];
    })
  }

  private getTitle() {
    this.currentTitle = this.titleService.getTitle();
  }

  protected addCity(createdCity: CitiesModel) {
    this.cities = [...this.cities, createdCity];
  }
}
