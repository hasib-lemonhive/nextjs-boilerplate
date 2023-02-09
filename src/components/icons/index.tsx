import { IconNames } from './interface';
import { ErrorVector } from './sub-components/error';
import { NoDataVector } from './sub-components/no-data';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface IIconStoreProps {
  iconName: IconNames;
}

/**
 * @method IconStore
 * @param {iconName} IIconStoreProps
 * @returns {JSX.Element}
 * @description this function will receive iconName and return icon JSX.Element(svg)
 */
const IconStore = ({ iconName }: IIconStoreProps) => {
  switch (iconName) {
    case 'error-vector': {
      return <ErrorVector />;
    }
    case 'no-data-vector': {
      return <NoDataVector />;
    }
    case 'arrow-left': {
      return <FaArrowLeft />;
    }
    case 'arrow-right': {
      return <FaArrowRight />;
    }
    case 'chevron-left': {
      return <FaArrowLeft />;
    }
    case 'chevron-right': {
      return <FaArrowRight />;
    }
  }
};

export default IconStore;
