import { newSpecPage } from '@stencil/core/testing';
import { Table } from '../table';

describe('generic-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Table],
      html: `<generic-table></generic-table>`,
    });
    expect(page.root).toEqualHtml(`
      <generic-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </generic-table>
    `);
  });
});
