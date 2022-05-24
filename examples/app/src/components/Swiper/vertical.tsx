import React from 'react';

import { View, Swiper } from '@ray-js/components';

import styles from './index.module.less';

function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Demo() {
  return (
    <Swiper
      className={styles.swiper}
      autoplay
      vertical
      interval={1800}
      dots={true}
      dataSource={[randomColor(), randomColor(), randomColor()]}
      renderItem={(color: string) => {
        return <View className={styles.swiperItem} style={{ backgroundColor: color }} />;
      }}
    />
  );
}
