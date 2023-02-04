import { Component } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {

  planets: Planet[] = [];

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetService.getPlanets()
        .subscribe(planets => {this.planets = planets; console.log(planets)});
  }
}
