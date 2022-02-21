// import React from "react";

// const CaculatorTitle = (props) => {
//     return(
//         <div className="caculator-title">
//             {props.value}
//         </div>
//     )
// }

// export default CaculatorTitle;
import React from 'react';

// Create Functional Component.
// Takes title as props.value.
const CalculatorTitle = (props) => {
  return (
    <div className="calculator-title">
      { props.value }
    </div>
  )
}

// Export Calculator Title.
export default CalculatorTitle;