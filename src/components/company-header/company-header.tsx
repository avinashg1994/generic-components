import { Component, h } from '@stencil/core';
import logo from './assets/svg-w3c-h.svg';

@Component({
  tag: 'company-header',
  styleUrl: 'company-header.css',
  shadow: true,
})
export class CompanyHeader {

  render() {
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
            <div class="dropdown-container">
              <button>Demo</button>
              <button>Demo</button>
              <button>Demo</button>
              <button>Demo</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
