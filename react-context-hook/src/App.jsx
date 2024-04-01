// useContext() = React Hook that allows you to share
//                values between multiple levels of
//                components without passing props
//                trough each level

// Provider Component
// 1. import {createContext} from 'react';
// 2. export const myContext = createContext()
// 3. <MyContext.Provider value ={value}>
//       <Child />
//     </MyContext.Provider>!
//

// Consumer Components
// 1. import React, {useContext} from 'react'
//    import {myContext} from './componentAl';
// 2. const value useContext(myContext)
import ComponentA from "./components/ComponentA";
const App = () => {
  return (
    <>
      <ComponentA />
    </>
  );
};

export default App;
