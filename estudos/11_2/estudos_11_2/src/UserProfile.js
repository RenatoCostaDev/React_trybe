import React from 'react';
import Image from './Image';

export default  props => (
  <div>
    <p> {props.user.name} </p>
    <p> {props.user.email} </p>
    <Image source={props.user.avatar} alt="User avatar" />
  </div>
);

// class UserProfile extends React.Component {
//   render() {
//     return (
//       <div>
//         <p> {this.props.user.name} </p>
//         <p> {this.props.user.email} </p>
//         <Image source={this.props.user.avatar} alt="User avatar" />
//       </div>
//     );
//   }
// }
// export default UserProfile;