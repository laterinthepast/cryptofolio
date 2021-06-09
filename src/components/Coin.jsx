import React from 'react';



const coinList = [];



const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {

 function handleAdd(e){
  const clickedCoin = e.target.parentElement
  coinList.push(clickedCoin)
  console.log(clickedCoin)
  console.log(coinList)
  return clickedCoin;
 }

  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>({symbol})</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
      <button type="button" onClick={handleAdd}>add to your cryptofolio</button>
    </div>
    
  );
};

export default Coin;
export {coinList}
export function handleAdd() {}