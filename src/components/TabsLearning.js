import React from "react";
import { Link } from "react-router-dom";

export const Tabs = () => {
  return (
    <div>
      <div>
        <div className='main container'>
          <div className='tabs is-centered'>
            <ul>
              <li className='tab-links'>
                <Link to='/skills'>Proficient</Link>
              </li>
              <li className='is-active tab-links'>
                <Link to='/learning'>Learning</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
