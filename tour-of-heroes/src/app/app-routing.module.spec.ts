import { AppRoutengModule } from './app-routeing.module';

describe('AppRouteingModule', () => {
  let appRouteingModule: AppRoutengModule;

  beforeEach(() => {
    appRouteingModule = new AppRoutengModule();
  });

  it('should create an instance', () => {
    expect(appRouteingModule).toBeTruthy();
  });
});
