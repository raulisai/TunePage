import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  
  // const children = props.children;

  console.log(props)

  return (
    <React.Fragment>
      <Navbar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
