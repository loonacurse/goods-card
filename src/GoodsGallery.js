import React from 'react';
import GoodsCard from './GoodsCard';

function GoodsGallery(){
    const goodsData = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Combo',
            price: 3120,
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/13794471/pexels-photo-13794471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Cream',
            price: 930,
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/4202328/pexels-photo-4202328.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Este combo',
            price: 1925,
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/8709562/pexels-photo-8709562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Face Serum',
            price: 740,
        },
        {
            id: 5,
            image: 'https://images.pexels.com/photos/6847872/pexels-photo-6847872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: 'Combo Misolo',
            price: 2650,
        },
        {
            id: 6,
            image: 'https://images.pexels.com/photos/9496256/pexels-photo-9496256.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Mskin cream',
            price: 1535,
        }
    ];
    return (
        <div className="goods-gallery">
         {goodsData.map((item) => (
            <GoodsCard
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
            />
        ))}
    </div>
    );
  }
  
  export default GoodsGallery;