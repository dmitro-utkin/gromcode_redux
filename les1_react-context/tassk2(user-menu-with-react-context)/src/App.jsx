import React, { useState } from 'react';
import Header from './Header';
import { UserContext } from './UserContext';

const App = () => {
  const [userData] = useState({
    name: 'Nikola Tesla',
    avatar_url: 'https://avatars3.githubusercontent.com/u10001'
  });

  return (
    <UserContext.Provider value={userData}>
      <div className="page">
        <Header />
      </div>
    </UserContext.Provider>
  );
};

export default App;