import React from 'react'

const Tab = ({ active, hash, title, ...props }) =>
  <li className="nav-item">
    <a 
      className={`nav-link ${active ? 'active' : ''}` } 
      href={ `#${hash}`}
      {...props}
    >{title}</a>
  </li>

class Tabs extends React.Component {
  static Tab = Tab;

  state = {
    activeTabIndex: 0
  }

  handleClick = index => this.setState({ activeTabIndex: index });

  isActive = index => index === this.state.activeTabIndex;

  render () {
    return (
      <React.Fragment>
        <ul className="nav nav-tabs">
          {React.Children.map(this.props.children, (child, index) =>
            React.cloneElement(child, {
              active: this.isActive(index),
              onClick:() => this.handleClick(index)
            }, child.props.title)

          )}
        </ul>

        {React.Children.map(this.props.children, (child, index) =>
          this.isActive(index) && <section>{child.props.children}</section>
        )}
      </React.Fragment>
      
    );
  }
}

export default Tabs
