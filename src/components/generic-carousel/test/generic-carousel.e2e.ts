import { newE2EPage } from '@stencil/core/testing';

describe('generic-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<generic-carousel></generic-carousel>');

    const element = await page.find('generic-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
