import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'generic-table',
  styleUrl: 'table.css',
  shadow: true,
})
export class Table {
  @Prop() tableData!: Array<object>;
  @Prop() columnHeadings!: Array<string>;
  @Prop() title!: string;

  render() {
    const data = this.tableData?.map((row, index) => {
      let rowData = [];
      let i = 0;
      for (const key in row) {
        rowData.push({
          key: this.columnHeadings[i],
          val: row[key]
        })
      }

      return (
        <tr key={index}>
          {rowData.map((data, index) => <td key={index} data-heading={data.key}>{data.val}</td>)}
        </tr>
      )
    })

    return (
      <div class="table-container">
        <div class="table-title">
          <h2>{this.title}</h2>
        </div>
        <table class="table">
          <thead>
            <tr>
              {this.columnHeadings?.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    );
  }
}
