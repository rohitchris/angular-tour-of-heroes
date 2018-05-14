import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroesRoro = [
      { id: 11, salutation: 'Mr.', name: 'Nice', designation: 'Head Chef' },
      { id: 12, salutation: 'Mr.', name: 'Narco', designation: 'Project Lead' },
      // { id: 13, salutation: 'Ms.', name: 'Bombasto', designation: 'Team Lead' },
      // { id: 14, salutation: 'Mrs.', name: 'Celeritas', designation: 'Creative Director' },
      // { id: 15, salutation: 'Ms.', name: 'Magneta', designation: 'Techie' },
      // { id: 16, salutation: 'Mr.', name: 'RubberMan', designation: 'Techie' },
      // { id: 17, salutation: 'Mr.', name: 'Dynama', designation: 'Techie' },
      // { id: 18, salutation: 'Dr.', name: 'IQ', designation: 'Techie' },
      // { id: 19, salutation: 'Mr.', name: 'Magma', designation: 'Head Chef' },
      // { id: 20, salutation: 'Mr.', name: 'Tornado', designation: 'Head Chef' }
    ];
    return {heroesRoro};
  }
}