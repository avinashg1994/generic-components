import { newSpecPage } from '@stencil/core/testing';
import { CompanyHeader } from '../company-header';

describe('company-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CompanyHeader],
      html: `<company-header></company-header>`,
    });
    expect(page.root).toEqualHtml(`
      <company-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </company-header>
    `);
  });
});
