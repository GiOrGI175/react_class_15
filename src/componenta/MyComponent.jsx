import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    console.log('my compn დაიბადა');

    return () => {
      console.log('my compn მოკვდა');
    };
  }, []);

  return (
    <div>
      <h1>my compn</h1>
    </div>
  );
};

export default MyComponent;
