import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { of } from 'rxjs';

// object for directory to pull from
class Employee {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
  email: string;
  googleChat: string;
}

// May use for setting up directory later might need to be deleted
export class directory {
  directory = [
    {
      id: 1,
      firstName: 'Juri',
      lastName: 'Example',
      jobTitle: 'Manager'
    },
    {
      id: 2,
      firstName: 'Steffi',
      lastName: 'Example',
      jobTitle: 'Finacial Analysis'
    },
    {
      id: 3,
      firstName: 'Dietmar',
      lastName: 'Example',
      jobTitle: 'Saless'
    }
  ];

}

@Injectable({
  providedIn: 'root'
})

export class DirectoryService {
  /*
  // For use later when connected to Directory API
  private directory = new BehaviorSubject<Employee[]>(null);
  directory$: Observable<Employee[]> = this.directory.asObservable();
  */

  directory = [
    {
      id: 1,
      firstName: 'Juri',
      lastName: 'Example',
      jobTitle: 'Manager'
    },
    {
      id: 2,
      firstName: 'Steffi',
      lastName: 'Example',
      jobTitle: 'Finacial Analysis'
    },
    {
      id: 3,
      firstName: 'Dietmar',
      lastName: 'Example',
      jobTitle: 'Saless'
    }
  ];

  constructor() { }
  
  // GET ROUTES
  getDirectory() {
    return of(this.directory);
  }

  setEmployeeToDirectory(id: number, firstName: string, lastName: string, jobTitle: string){
    let personToSet = new Employee;
    personToSet.id = id;
    personToSet.firstName = firstName;
    personToSet.lastName = lastName;
    personToSet.jobTitle = jobTitle;
    this.directory.push(personToSet);
  }

}