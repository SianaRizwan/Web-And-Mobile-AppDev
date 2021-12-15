import React, { useState } from 'react';
import './App.css';
import ava1 from './images/p(1).jpg';
import ava2 from './images/p(2).png';
import ava3 from './images/p(3).jpg';
import ava4 from './images/p(4).jpg';
import img1 from './images/image1.png';
import img2 from './images/image2.png';
import img3 from './images/image3.png';
import img4 from './images/image4.png';
import Product from './Components/ProductList';

function App() {
  let products = [
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      upvote: 63,
      submittedby: ava1,
      image: img1,
    },
    {
      id: 2,
      title: 'Supermajority: The Fantasy Congress League',
      description:
        'Earn points when your favorite politicians pass legislation.',
      upvote: 54,
      submittedby: ava2,
      image: img2,
    },
    {
      id: 3,
      title: 'Tinfolid: Tailored tinfoil hats',
      description: 'We already have your measurements and shipping address.',
      upvote: 30,
      submittedby: ava3,
      image: img3,
    },
    {
      id: 4,
      title: 'Haught or Naught',
      description: 'High-minded or absent-minded? You decide.',
      upvote: 61,
      submittedby: ava4,
      image: img4,
    },
  ];

  const [sortedProducts, setSortedProducts] = useState(
    products.sort((a, b) => {
      return b.upvote - a.upvote;
    })
  );

  const [renderProductsList, setRenderList] = useState(null);

  const getRenderList = () => {
    let renderProducts = sortedProducts.map((prod) => (
      <Product
        key={prod.id}
        id={prod.id}
        title={prod.title}
        description={prod.description}
        upvote={prod.upvote}
        submittedby={prod.submittedby}
        image={prod.image}
        sortAfterClick={sortAfterClick}
      />
    ));
    setRenderList(renderProducts);
  };

  const sortAfterClick = (pid) => {
    sortedProducts.map((prod) => {
      if (prod.id === pid) {
        prod.upvote = prod.upvote + 1;
      }
    });
    setSortedProducts(
      sortedProducts.sort((a, b) => {
        return b.upvote - a.upvote;
      })
    );
    getRenderList();
  };

  return (
    <div className='App'>
      <div className='app'>Popular Products</div>
      <hr></hr>
      {renderProductsList
        ? renderProductsList
        : sortedProducts.map((prod) => (
            <Product
              key={prod.id}
              id={prod.id}
              title={prod.title}
              description={prod.description}
              upvote={prod.upvote}
              submittedby={prod.submittedby}
              image={prod.image}
              sortAfterClick={sortAfterClick}
            />
          ))}
    </div>
  );
}

export default App;
