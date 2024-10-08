import logger from '@/hybrid-mini-robot-map/protocol/loggerUtil';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDevice } from '@ray-js/panel-sdk';
import { updateMapData } from '@/redux/modules/mapStateSlice';
import _ from 'lodash';
import { StreamDataNotificationCenter } from '@ray-js/robot-data-stream';

/**
 * 接收地图数据并解析
 * @returns
 */
export default function useMapData() {
  const mapDataStrCache = useRef('');
  const dispatch = useDispatch();
  const { devId } = useDevice(device => device.devInfo);

  useEffect(() => {
    const handleMapData = (mapDataStr: string) => {
      if (mapDataStr !== mapDataStrCache.current) {
        logger.success('地图数据', mapDataStr);

        ty.setStorageSync({
          key: `map_${devId}`,
          data: mapDataStr,
        });

        mapDataStrCache.current = mapDataStr;

        dispatch(updateMapData({ originMap: mapDataStr }));
      }
    };

    StreamDataNotificationCenter.on('receiveMapData', handleMapData);

    return () => {
      StreamDataNotificationCenter.off('receiveMapData');
    };
  }, []);
  return {};
}
