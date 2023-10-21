import React, {
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { getSuggestedProducts } from '../../functions/getSuggestedProducts';

import { Product } from '../../types/Product';

import { SliderContent } from '../SliderContent';
import { setDisabledButton } from '../../functions/setDisabledButton';

const title = 'You may also like';

const gap = 16;

export const Like = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [translate, setTranslate] = useState(0);
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(false);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const ref = useRef() as RefObject<HTMLDivElement>;

  const blockWidth = ref.current?.clientWidth || 0;

  const elementWidth = useMemo(() => {
    if (blockWidth === (71 * gap)) {
      return (blockWidth + gap) / 4;
    }

    if (blockWidth === (53 * gap)) {
      return (blockWidth + gap) / 3;
    }

    if (blockWidth === (35 * gap)) {
      return (blockWidth + gap) / 2;
    }

    return blockWidth + gap;
  }, [blockWidth]);

  useEffect(() => {
    getSuggestedProducts()
      .then(setProducts)
      .catch(() => new Error('Loading products error'));

    return () => setProducts(products);
  }, []);

  useEffect(() => {
    setDisabledButton(
      setIsLeftButtonDisabled,
      setIsRightButtonDisabled,
      products,
      elementWidth,
      translate,
    );
  }, [translate]);

  const onLeftClick = () => {
    setTranslate(currentTranslate => currentTranslate + elementWidth);
  };

  const onRightClick = () => {
    setTranslate(currentTranslate => currentTranslate - elementWidth);
  };

  return (
    <div className="slider">
      <SliderContent
        title={title}
        onLeftClick={onLeftClick}
        onRightClick={onRightClick}
        isLeftButtonDisabled={isLeftButtonDisabled}
        isRightButtonDisabled={isRightButtonDisabled}
        reference={ref}
        translate={translate}
        products={products}
      />
    </div>
  );
};
