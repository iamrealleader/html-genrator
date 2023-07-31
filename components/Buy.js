import { Context, useContext } from 'react'
import { FeaturesContext } from './Context'

const Buy = () => {
    const { buy } = useContext(FeaturesContext);
  return (
    <div className='buy'>
        { buy && buy.map( ( data , index ) => (
            <div key={index} className="buyContainer">
                <img className='buyImg' src={data.image} alt="mobile picture" />
                <div className="buyDes">
                    <p className="buyp">{data.desc}</p>
                    <div className="buy_inner_container">
                        <img src={data.StoreImage} alt="buy image" className="buyDesImg" />
                        <button className="buyBtn"><a className='buy_link' href={data.link} target="_blank" rel="noopener noreferrer">Check Price</a></button>
                     </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Buy
