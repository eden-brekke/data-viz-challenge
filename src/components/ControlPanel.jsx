import Header from './Header'
import * as api from '../api';
import { useState } from 'react'

function ControlPanel({sexMeta, locMeta, yearMeta}) {
  const [data, setData] = useState(['Loading']);
  
  async function dataHandler(event){
    event.preventDefault();
    let location = event.target.userSelectedLoc.value;
    let year = event.target.userSelectedYear.value;
    let sex = event.target.userSelectedSex.value
    console.log("location", location)
    const newData = await api.fetchData({
      // location_id: location,
      year_id: year,
      sex_id: sex,
    });
    setData(newData);
    console.log(newData);
    console.log('just like saying words');
  }

  return (
    <>
    <div className="App">
      <form onSubmit={dataHandler}>
      <div className="control">
        <span className="control__label">Sex: </span>
        <select id="userSelectedSex" className="select-sex__options">
          {sexMeta.map((option) => (
            <option value={`${option.sex_id}`}>{option.sex_short_name}</option>
          ))}
        </select>
      </div>
      <div className="control">
        <span className="control__label">Year: </span>
        <select id="userSelectedYear" className="select-year__options">
          {yearMeta.map((option) => (
            <option value={`${option.year_id}`}>{option.year_name}</option>
          ))}
        </select>
      </div>
      <div className="control">
        <span className="control__label">Locations: </span>
        <select id="userSelectedLoc" className="select-loc__options">
          {locMeta.map((option) => (
            <option value={`${option.location_id}`}>{option.location_name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Hello</button>
      </form>
    </div>
    <Header data = {data}/>
    </>
  );
}

export default ControlPanel;
