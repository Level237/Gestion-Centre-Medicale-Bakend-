import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Person } from '../person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  apiperson:Observable<Person[]>;

  // constructor() { }
  constructor(private personService: PersonService) {
    this.apiperson=this.personService.getperson();
  }

  ngOnInit(): void {

  }

  }

