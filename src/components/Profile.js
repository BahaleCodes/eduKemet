import React from 'react';

import Navigation from './Navigation';
import Gallery from './Gallery';

const Profile = () => {
  const entries =  [
    { name: 'Mmapaseka', score: 14200 },
    { name: 'Thandi', score: 14100 },
    { name: 'Charlie', score: 13050 },
    { name: 'Ephent', score: 10000 },
    { name: 'Eve', score: 11900 },
    { name: 'Alice', score: 11200 },
    { name: 'Bobo', score: 13100 },
    { name: 'Tsholofelo', score: 11050 },
    { name: 'Jabulile', score: 13000 },
    { name: 'Tshepang', score: 9000 }
  ];
  const sortedEntries = [...entries].sort((a, b) => b.score - a.score);
  return (
    <React.Fragment>
      <Navigation />
      <div id='profile' className='text-center'> 
        <div className="container">
          <h1>Welcome home, <h2>Thandi</h2></h1>
          <Gallery />
          <div className="section-title">
            <h2>Rankings</h2>
          </div>
          <div className="pyramid">
            {sortedEntries.map((entry, index) => (
              <div key={index} className={`pyramid-level level-${index + 1}`}>
                <div className="pyramid-entry">
                  <div className="pyramid-section">
                    <h4 className="pyramid-rank">
                      #{index + 1}
                    </h4>
                    <h4 className="pyramid-name">
                      {entry.name}  
                    </h4>
                  </div>
                  <div className="pyramid-section">
                    <h4 className="pyramid-score">
                    {entry.score} pts
                    </h4>
                    -
                    {
                      entry.name === 'Mmapaseka' && (
                        <h4 className='rival'>RIVAL</h4>
                      )
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile;