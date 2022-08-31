import * as api from '../api';
import { useEffect, useState } from 'react'
import Footer from './buildingblocks/Footer';
import Main from './buildingblocks/Main';


function App() {
  const [sexMeta, setSexMeta] = useState(['Loading']);
  const [locMeta, setLocMeta] = useState(['Loading']);
  const [yearMeta, setYearMeta] = useState(['Loading']);
  const [cite, setCite] = useState(['Loading']);
  
  useEffect(() => {
    console.log("hello effect use")
    async function fetchMeta() {
      console.log("beginning of fetch")
      const sexmeta = await api.fetchSexMetadata();
      const locmeta = await api.fetchLocationMetadata();
      const yearmeta = await api.fetchYearMetadata();
      const citation = await api.fetchCitation();
      setSexMeta(sexmeta);
      setYearMeta(yearmeta);
      setLocMeta(locmeta);
      setCite(citation);
      console.log(sexmeta, locmeta, yearmeta);
      console.log('ye be oporate?')
    }
    fetchMeta();
  }, [])

  
  return (
    <>
    <Main sexMeta={sexMeta} locMeta={locMeta} yearMeta={yearMeta} />
    <Footer cite={cite} />
    </>
  );
}

export default App;
