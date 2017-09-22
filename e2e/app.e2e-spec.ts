import { RestaurantesCedroPage } from './app.po';

describe('restaurantes-cedro App', function() {
  let page: RestaurantesCedroPage;

  beforeEach(() => {
    page = new RestaurantesCedroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
