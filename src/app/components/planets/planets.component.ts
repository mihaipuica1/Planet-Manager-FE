import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {

  planets: Planet[] = [];
  selectedPlanet?: Planet;

  planetForm = this.formBuilder.group({
    id: 0,
    name: '',
    description: '',
    status: '',
    teamId: 0,
    teamDto: null
  });

  constructor(private planetService: PlanetService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetService.getPlanets()
        .subscribe(planets => this.planets = planets);
  }

  onSelect(planet: Planet): void {
    this.selectedPlanet = planet;
    this.planetForm.controls['id'].setValue(planet.id);
    this.planetForm.controls['name'].setValue(planet.name);
    this.planetForm.controls['teamId'].setValue(planet.teamId);
  }

  onSubmit(): void {
    this.planetService.updatePlanet(this.planetForm);
  }

}
