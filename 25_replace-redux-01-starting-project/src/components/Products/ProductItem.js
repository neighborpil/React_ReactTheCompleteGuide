import React, {useContext} from 'react';

import Card from '../UI/Card';
import {useStore} from "../../hooks-store/store";
// import {ProductsContext} from "../../context/products-context";

const ProductItem = React.memo(props => {

  console.log('RERENDER');
  const dispatch = useStore()[1];

  // const toggleFav = useContext(ProductsContext).toggleFav;

  const toggleFavHandler = () => {
    // toggleFav(props.id);
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
