import React from 'react';
import '../Styles/style.scss';


class StatusDropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
       status:false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  this.changeStatus = this.changeStatus.bind(this);
};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  changeStatus(event) {
    event.preventDefault();
    this.state.status=!this.state.status;
  }



  render() {
    const online = (
        <div className="element">
            <i className="fa fa-circle Online" />
        Online
        </div>            
    );
    const offline = (
      <div className="element">
          <i className="fa fa-circle Offline" />
      Offline
      </div>            
    );
    return (
        <div  className="status">
         <div className="status-button" onClick={this.showDropdownMenu}> {this.state.status? online:offline} </div>
         <div class="status-dropdown-list">
          { this.state.displayMenu ? (
            <ul>
            <li onClick={this.changeStatus}>{online}</li>
            <li onClick={this.changeStatus}>{offline}</li>
            </ul>
        ):
        (
          null
        )
        }
        </div>

       </div>
    );
  }
}

export default StatusDropdown;
