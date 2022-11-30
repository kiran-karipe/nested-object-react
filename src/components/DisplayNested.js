import React from 'react';

function DisplayNested({ data }) {
  const isObject = value => {
    if (typeof value === 'object' && value !== null) return true;

    return false;
  };

  const renderComponent = obj => {
    return (
      <>
        {Object.entries(obj).map(([key, value]) => {
          if (isObject(value)) {
            return (
              <div key={key}>
                <p>{key}: </p>
                <div style={{ paddingLeft: 50 }}>{renderComponent(value)}</div>
              </div>
            );
          } else {
            return (
              <p key={key}>
                {key}: {value}
              </p>
            );
          }
        })}
      </>
    );
  };

  return <div>{renderComponent(data)}</div>;
}

export default DisplayNested;
