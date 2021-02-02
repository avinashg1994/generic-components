import { newSpecPage } from '@stencil/core/testing';
import { GenericCarousel } from '../generic-carousel';

describe('generic-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GenericCarousel],
      html: `<generic-carousel></generic-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <generic-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </generic-carousel>
    `);
  });
});
