import { useContext } from 'react'
import { datacontext } from './context/DataContext'

const App = () => {
  const [data,setdata] = useContext(datacontext);
  console.log(data);
  return <div>App</div>;
}

export default App