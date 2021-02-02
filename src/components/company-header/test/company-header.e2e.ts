import { newE2EPage } from '@stencil/core/testing';

describe('company-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<company-header></company-header>');

    const element = await page.find('company-header');
    expect(element).toHaveClass('hydrated');
  });
});
