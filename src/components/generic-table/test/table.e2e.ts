import { newE2EPage } from '@stencil/core/testing';

describe('generic-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<generic-table></generic-table>');

    const element = await page.find('generic-table');
    expect(element).toHaveClass('hydrated');
  });
});
