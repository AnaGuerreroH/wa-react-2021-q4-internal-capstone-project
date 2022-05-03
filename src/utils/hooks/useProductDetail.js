import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductDetail(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productDetail, setProductDetail] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductDetail() {
      try {
        setProductDetail({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${productId}%22%29+%5D%5D`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProductDetail({ data, isLoading: false });
      } catch (err) {
        setProductDetail({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProductDetail();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return productDetail;
}