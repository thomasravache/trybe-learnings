import React from 'react';

class ShowErrors extends React.Component {
  render() {
    return(
      <div className="erro">
        <ul>
          <li>E-mail inválido.</li>
        </ul>
        <ul>
          <li>The password must contain at least 1 lowercase alphabetical character.</li>
          <li>The password must contain at least 1 uppercase alphabetical character.</li>
          <li>The password must contain at least 1 numeric character.</li>
          <li>The password must contain at least one special character.</li>
          <li>The password must be eight characters or longer.</li>
        </ul>
      </div>
    );
  }
}

export default ShowErrors;