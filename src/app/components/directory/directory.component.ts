import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../../services/directory.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  // for use later when connected directory API
  /*
  directory$: Observable<Employee[]>;

  constructor(directoryService: DirectoryService) { 
  this.directory$ = directoryService.directory$;
  }
  */
  constructor(private directoryService: DirectoryService){

  }

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
      jobTitle: 'Sales'
    },
    {
      id: 4,
      firstName: 'Adam',
      lastName: 'Example',
      jobTitle: 'Finacial Analysis'
    },
    {
      id: 5,
      firstName: 'Sam',
      lastName: 'Example',
      jobTitle: 'Sales'
    },
    {
      id: 6,
      firstName: 'David',
      lastName: 'Example',
      jobTitle: 'Finacial Analysis'
    },
    {
      id: 7,
      firstName: 'Richard',
      lastName: 'Example',
      jobTitle: 'Sales'
    }
    ,
    {
      id: 8,
      firstName: 'Dee',
      lastName: 'Example',
      jobTitle: 'Sales'
    },
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
      jobTitle: 'Sales'
    },
    {
      id: 4,
      firstName: 'Adam',
      lastName: 'Example',
      jobTitle: 'Finacial Analysis'
    },
    {
      id: 5,
      firstName: 'Sam',
      lastName: 'Example',
      jobTitle: 'Sales'
    },
    {
      id: 6,
      firstName: 'David',
      lastName: 'Example',
      jobTitle: 'Finacial Analysis'
    },
    {
      id: 7,
      firstName: 'Richard',
      lastName: 'Example',
      jobTitle: 'Sales'
    }
    ,
    {
      id: 8,
      firstName: 'Dee',
      lastName: 'Example',
      jobTitle: 'Sales'
    }
  ];

  ngOnInit() {
    this.directoryService.getDirectory();
  }
  
  // *ngFor='let in of counter(5) ;let i = index
  counter(i: number) {
    return new Array(i);
}

}