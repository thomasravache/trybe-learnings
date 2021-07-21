import React from 'react';
import UserProfile from './UserProfile';

class ListProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return(
      data.map((user) => <UserProfile key={user.id} user={user} />)
    );
  }
}

export default ListProfile;