import React, { useState, useCallback, useEffect } from 'react';

const ChildComponent = ({ func }) => {
  useEffect(() => {
    console.log(func());
  }, [func]);

  return <div>Test</div>;
};

const AddUser = () => {
  const [value, setValue] = useState(0);

  const testFunc = useCallback(() => 'Stefan', []);

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Add</button>
      <button onClick={() => setValue(value - 1)}>Substract</button>
      <ChildComponent func={testFunc} />
    </>
  );
};

export default AddUser;
