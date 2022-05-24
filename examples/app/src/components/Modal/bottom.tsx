import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import { Modal, View, Button } from '@ray-js/components';
import styles from './index.module.less';

export default function () {
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <Fragment>
      <Button onClick={toggleModal}>点击切换Modal显示隐藏状态</Button>
      <Modal show={isShowModal} position='bottom' overlay={true} onClickOverlay={toggleModal}>
        <View className={clsx(styles.modalContent, styles.wFull)}>content</View>
      </Modal>
    </Fragment>
  );
}
