import { Component, h, Prop, Watch } from '@stencil/core';
import logo from './assets/svg-w3c-h.svg';

@Component({
  tag: 'company-header',
  styleUrl: 'company-header.css',
  shadow: true,
})
export class CompanyHeader {
  @Prop() headerConfig!: string;

  private topNavRef: HTMLDivElement;

  constructor() {
    this.myFunction = this.myFunction.bind(this);
  }

  private config: Array<object>
  @Watch('headerConfig')
  headerConfigWatcher(newValue: string) {
    this.config = JSON.parse(newValue);
  }

  myFunction() {
    if (this.topNavRef.className === "topnav") {
      this.topNavRef.className += " responsive";
    } else {
      this.topNavRef.className = "topnav";
    }
  }

  componentWillLoad() {
    this.headerConfigWatcher(this.headerConfig);
  }

  render() {
    let dropdowns = [];
    for (const key in this.config) {
      dropdowns.push(
        <div class="dropdown">
          <button class="dropbtn">{key}</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      )
    }
    

    return (
      <div class="header-container">
        <div class="header-wrapper">
          <div class="company-logo">
            <img src={logo} alt="company logo" />
          </div>
          <div class="header-content">
            <div class="search-container">
              <input placeholder="Search the website"></input>
            </div>
            <div class="topnav" ref={el => this.topNavRef = el}>
              {dropdowns}
              <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>&#9776;</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
