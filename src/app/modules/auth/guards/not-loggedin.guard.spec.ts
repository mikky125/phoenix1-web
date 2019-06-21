import { TestBed, async, inject } from '@angular/core/testing';

import { NotLoggedinGuard } from './not-loggedin.guard';

describe('NotLoggedinGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotLoggedinGuard]
    });
  });

  it('should ...', inject([NotLoggedinGuard], (guard: NotLoggedinGuard) => {
    expect(guard).toBeTruthy();
  }));
});
