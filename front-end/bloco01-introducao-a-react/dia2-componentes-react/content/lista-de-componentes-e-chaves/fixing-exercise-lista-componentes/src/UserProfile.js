import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, name, email, avatar } = this.props.user; // recebe um objeto
    const {key} = this.props;

    return (
      <li key={key}>
        <p>Id: {id} Nome: {name} E-mail: {email}</p>
        <Image source={avatar}/>
      </li>
    );
  }
}

export default UserProfile;