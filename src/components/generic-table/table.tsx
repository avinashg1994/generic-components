import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'generic-table',
  styleUrl: 'table.css',
  shadow: true,
})
export class Table {
  @Prop() tableData!: Array<object> | string;
  @Prop() columnHeadings!: Array<string> | string;
  @Prop() title!: string;

  private _tableData: Array<object>
  @Watch('tableData')
  tableDataWatcher(newValue: Array<object> | string) {
    if (typeof newValue === 'string') {
       this._tableData = JSON.parse(newValue);
    } else {
      this._tableData = newValue;
    }
  }

  private _columnHeadings: Array<string>
  @Watch('columnHeadings')
  columnHeadingsWatcher(newValue: Array<string> | string) {
    if (typeof newValue === 'string') {
      this._columnHeadings = newValue.match(/'[a-zA-Z0-9 ]+'/g);
      const filterArray = (item, index, arr) => {
        arr[index] = item.substring(1,item.length-1);
      };
      this._columnHeadings.forEach(filterArray)
    } else {
      this._columnHeadings = newValue;
    }
  }
  
  componentWillLoad() {
    this.tableDataWatcher(this.tableData);
    this.columnHeadingsWatcher(this.columnHeadings);
  }

  render() {
    const data = this._tableData?.map((row, index) => {
      let rowData = [];
      let i = 0;
      for (const key in row) {
        rowData.push({
          key: this._columnHeadings[i],
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
              {this._columnHeadings?.map((col, index) => (
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
