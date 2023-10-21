import { Product } from '../types/Product';

type Function = (
  setIsLeftButtonDisabled: (value: React.SetStateAction<boolean>) => void,
  setIsRightButtonDisabled: (value: React.SetStateAction<boolean>) => void,
  products: Product[],
  elementWidth: number,
  translate: number,
) => void;

export const setDisabledButton: Function = (
  setIsLeftButtonDisabled,
  setIsRightButtonDisabled,
  products,
  elementWidth,
  translate,
) => {
  if (translate === 0) {
    setIsLeftButtonDisabled(true);
  } else if ((products.length - 4) * elementWidth === -translate) {
    setIsRightButtonDisabled(true);
  } else {
    setIsLeftButtonDisabled(false);
    setIsRightButtonDisabled(false);
  }
};
