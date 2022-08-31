import * as api from '../api';
import { useEffect, useState } from 'react'
import Footer from './buildingblocks/Footer';
import Main from './buildingblocks/Main';


function App() {
  const [sexMeta, setSexMeta] = useState(['Loading']);
  const [locMeta, setLocMeta] = useState(['Loading']);
  const [yearMeta, setYearMeta] = useState(['Loading']);
  
  // Use Effects happen on page refresh and require a dependency array at the end to prevent loops. 
  // This functions purpose is to grab the metadata from the API, and set each individual metadata to their own states. 
  useEffect(() => {
    async function fetchMeta() {
      const sexmeta = await api.fetchSexMetadata();
      const locmeta = await api.fetchLocationMetadata();
      const yearmeta = await api.fetchYearMetadata();
      setSexMeta(sexmeta);
      setYearMeta(yearmeta);
      setLocMeta(locmeta);
    }
    fetchMeta();
  }, [])

  
  return (
    <>
    <Main sexMeta={sexMeta} locMeta={locMeta} yearMeta={yearMeta} />
    <Footer />
    </>
  );
}

export default App;
