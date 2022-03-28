import React from 'react';
import {useHistory} from 'react-router-dom';

function Home() {
  
  const history = useHistory();

  const handleClick = () => {
    // Want to go to animals
  // alert('You are headed to animals.');
  history.push('/animals');
  };
  
  return (
    <div>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
      <button onClick={handleClick}>GO TO ANIMALS</button>
    </div>
  );
};

export default Home;
