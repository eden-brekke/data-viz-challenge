import { useEffect, useState } from 'react';

import * as api from '../api';
import ControlPanel from './ControlPanel';
import Viz from './Viz';

export default function App(props) {
  const [data, setData] = useState(null);
  // Example of how you could fetch data
  useEffect(() => {
    async function fetchData() {
      const metadata = await api.fetchMetadata();
      const citation = await api.fetchCitation();
      const newData = await api.fetchData({
        location_name: [],
        year_name: [],
        sex_name: [],
      });
      setData(newData);
      console.log({ metadata, citation, newData });
    }
    fetchData();
  }, [props.id]);

  if (data){
  return (
    <div className="App">
      <ControlPanel />
      <Viz data={data}/>
    </div>
  );
  } else {
    return null;
  }
}
