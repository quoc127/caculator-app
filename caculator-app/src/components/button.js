// import React from "react";

// const Button = (props) =>{
//     return(
//         <input 
//         type="button" 
//         value={props.label}
//         onClick = {props.handleClick}
//         />
//     )
// };

// export default Button;

import React from 'react';

// Create our Button component as a functional component.
const Button = (props) => {
  return (
    <input
      type="button"
      value={props.label}
      onClick = {props.handleClick}
    />
  );
}

// Export our button component.
export default Button;