import * as api from '../api';
import { useEffect, useState } from 'react'
import ControlPanel from './ControlPanel.jsx';


function App(props) {
  const [sexMeta, setSexMeta] = useState(['Loading']);
  const [locMeta, setLocMeta] = useState(['Loading']);
  const [yearMeta, setYearMeta] = useState(['Loading']);
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
      console.log(sexmeta, locmeta, yearmeta);
      console.log('ye be oporate?')
    }
    fetchMeta();
  }, [props.id])
  return (
    <ControlPanel props={props} sexMeta={sexMeta} locMeta={locMeta} yearMeta={yearMeta}/>
  );
}

export default App;