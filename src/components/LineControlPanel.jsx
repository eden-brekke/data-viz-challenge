import { useCallback, useState } from 'react';

import { SexControl, YearControl }  from './controls';

import './ControlPanel.css';

// This component is responsible for the year sliding selector and the sex selector on the main page.
// These states could easily be hooked up to a graph to render on the selected year and sex data.
export default function ControlPanel() {
  const [sex, setSex] = useState('Females'); // default to females
  const [year, setYear] = useState(2017); // default to 2017

  // function connected to "onChange" event within the sex selector.
  const handelSexChange = useCallback(
    (nextValue) => {
      setSex(nextValue);
    },
    [setSex],
  );

  return (
    <div className="control-panel">
      <SexControl value={sex} onChange={handelSexChange} />
    </div>
  );
}
