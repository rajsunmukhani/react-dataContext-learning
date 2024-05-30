import React, { createContext, useState } from 'react'

export const datacontext = createContext(null);

const DataContext = (props) => {
    const [data,setdata] = useState("data to be accessed globally")

    return (
    <datacontext.Provider value={[data,setdata]}>
        {props.children}
    </datacontext.Provider>
  );
};

export default DataContext