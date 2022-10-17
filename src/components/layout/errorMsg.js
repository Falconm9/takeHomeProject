import React from "react";

const  ErrorMsg = ({error}) => {
  return (
    <>
      <h3 
          data-testid="errorMsg"
          style={errorStyle}
        >
          Error! {error.graphQLErrors[0].message}
        </h3>
    </>
  );
}

const errorStyle= {
  color: 'red'
}

export default ErrorMsg;
