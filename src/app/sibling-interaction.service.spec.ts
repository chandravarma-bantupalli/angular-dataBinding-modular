import { TestBed } from '@angular/core/testing';

import { SiblingInteractionService } from './sibling-interaction.service';

describe('SiblingInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiblingInteractionService = TestBed.get(SiblingInteractionService);
    expect(service).toBeTruthy();
  });
});
