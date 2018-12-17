import { TestBed } from '@angular/core/testing';

import { Neo4jdataService } from './neo4jdata.service';

describe('Neo4jdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Neo4jdataService = TestBed.get(Neo4jdataService);
    expect(service).toBeTruthy();
  });
});
