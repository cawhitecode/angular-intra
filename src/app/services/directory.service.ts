import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

class person {
  id: number;
  name: string;
  jobTitle: string;
}

@Injectable({
  providedIn: 'root'
})

export class DirectoryService {

  peoples = [
    {
      id: 1,
      name: 'Juri',
      jobTitle: 'Manager'
    },
    {
      id: 2,
      name: 'Steffi',
      jobTitle: 'Finacial Analysis'
    },
    {
      id: 3,
      name: 'Dietmar',
      jobTitle: 'Sales'
    }
  ];

  constructor() { }
  
  // GET ROUTES
  getDirectory() {
    this.setPeopleToPeoples(4, 'Chris', 'Tow');
    this.setPeopleToPeoples(5, 'Jim', 'Driver');
    this.setPeopleToPeoples(6, 'Sam', 'Payroll');
    return of(this.peoples);
  }

  setPeopleToPeoples(id: number, name: string, jobTitle: string){
    let personToSet = new person;
    personToSet.id = id;
    personToSet.name = name;
    personToSet.jobTitle = jobTitle;
    this.peoples.push(personToSet);
  }

}