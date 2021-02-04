import React from 'react';
import { Card, Image, Sticky } from 'semantic-ui-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

function ItemImagesCard({ contextRef }) {
    let objs = [
        {id: 1, name:"john"},
        {id: 2, name:"john"},
        {id: 3, name:"john"},
        {id: 4, name:"john"},
        {id: 4, name:"john"},
        {id: 4, name:"john"},
        {id: 4, name:"john"},
    ]
    for (let index = 0; index < 8; index++) {
        objs = [...objs, objs]
    }
    return (
        <Sticky context={contextRef} offset={130}>
        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' style={{ marginBottom: 4 }}/>
        <Swiper
          spaceBetween={8}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
            {objs.map((obj, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
              <Card>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
              </Card>
            </SwiperSlide>
            )) }
        </Swiper>
      </Sticky>
    )
}
export default ItemImagesCard