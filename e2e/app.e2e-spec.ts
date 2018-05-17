import { SemanticAngularProjectPage } from './app.po';

describe('semantic-angular-project App', function() {
  let page: SemanticAngularProjectPage;

  beforeEach(() => {
    page = new SemanticAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
