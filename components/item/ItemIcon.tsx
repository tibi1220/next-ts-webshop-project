import {
  CakeIcon,
  PaperClipIcon,
  ShoppingBagIcon,
  DeviceMobileIcon,
  FireIcon,
  HashtagIcon,
  ExclamationIcon,
} from '@heroicons/react/outline';
import React, { useMemo } from 'react';

const getImage = (id: number) => {
  switch (id) {
    case 1:
      return <CakeIcon />;
    case 2:
      return <PaperClipIcon />;
    case 3:
      return <ShoppingBagIcon />;
    case 4:
      return <DeviceMobileIcon />;
    case 5:
      return <FireIcon />;
    case 6:
      return <HashtagIcon />;
  }
  return <ExclamationIcon />;
};

interface Props {
  imageId: number;
}

const ItemIcon: React.FC<Props> = ({ imageId }) => {
  const Image = useMemo(() => getImage(imageId), [imageId]);

  return <div>{Image}</div>;
};

export default ItemIcon;
