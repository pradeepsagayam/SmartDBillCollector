import React, { Component } from 'react';
// import './slidemenu/MenuLinks.css';


class MenuLinks extends React.Component {
    constructor(props) {
      super(props);
      // Any number of links can be added here
      this.state = {
        links: [{
          text: 'Author',
          link: 'https://github.com/Lakston',
          icon: 'fa-pencil-square-o'
        }, {
          text: 'Github page',
          link: 'https://github.com/Lakston',
          icon: 'fa-github'
        }, {
          text: 'Twitter',
          link: 'https://twitter.com/Fab_is_coding',
          icon: 'fa-twitter'
        }]
      }
    }
    render() {
      let links = this.state.links.map((link, i) => <li ref={i + 1}><i aria-hidden="true" className={`fa ${ link.icon }`}></i><a href={link.link} target="_blank">{link.text}</a></li>);
  
      return (
          <div className={this.props.menuStatus} id='menu'>
            <ul>
              { links }
            </ul>
          </div>
      )
    }
  }
  export default MenuLinks;