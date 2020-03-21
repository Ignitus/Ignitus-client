import React from 'react';
import '../Styles/style.scss';


class ProfileDropdown extends React.Component {
constructor(props){
 super(props);

 this.state = {
       displayMenu: false,
       User: this.props.User,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

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

  render(props) {
    return (
        <div  className="profile-dropdown">
         <div className="profile-button" onClick={this.showDropdownMenu}> {this.state.User} </div>

         <div class="profile-dropdown-list">
          { this.state.displayMenu ? (
          <ul>
         <li><a href="/">Dashboard</a></li>
         <li><a href="/">Profile</a></li>
         <li><a href="/">Settings</a></li>
         <li><a href="/">Privacy Policy</a></li>
         <li><a href="/">Logout</a></li>
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

export default ProfileDropdown;
