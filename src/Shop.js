import { useState } from 'react';
import { data } from './data';
import Flowers from './Flowers';
import Buttons from './Buttons';


function Home() {

  const  [flowers, setFlowers] = useState(data);

  const chosenFlowers = (searchTerm) => {
    const newFlowers = data.filter(element => element.searchTerm === searchTerm);
    setFlowers(newFlowers);
  }
  
  return (
    <div>
      <div className='cont'>
        <h2 className='back'>Free Standart Shipping</h2>
      </div>
      <Buttons filteredFlowers={chosenFlowers}/>
      <Flowers anyFlowers={flowers}/>
    </div>
  );
}

export default Home;
