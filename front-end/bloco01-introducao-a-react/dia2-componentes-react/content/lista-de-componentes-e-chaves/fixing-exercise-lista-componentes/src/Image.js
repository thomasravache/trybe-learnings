import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <img src={this.props.source} alt='avatar' />
      </div>
    );
  }
};

export default Image;