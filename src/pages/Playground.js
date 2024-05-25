import React, { useEffect } from 'react';
import axios from 'axios';

// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Playground = () => {
  useEffect(() => {
    const recordVisit = async () => {
      try {
        const response = await axios.get('api/d3js/recent_visit_count/');
        console.log(response.data);
      } catch (error) {
        console.error('Error recording visit:', error);
      }
    };
    recordVisit();
  }, []);
  return (

    <>
      <Main
        title="Playgroun"
        description="Just a playground"
      >
        <div className="d3-main-container">
          {/* <div onMouseMove={onMouseMove}>
          <LinePlot data={data} />
        </div> */}
          <h1>Daily Visit Statistics</h1>
          <div className="graph">
            <iframe
              title="graph Chart"
              width="100%"
              height="584"
              src="https://observablehq.com/embed/641d25d574a5460b@404?cells=chart"
            />
          </div>
        </div>
      </Main>
    </>
  );
};
export default Playground;
