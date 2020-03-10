import {useCallback} from 'react';
import {firebaseFirestore} from "../../firebaseConfig";

const useProduct = () => {
  const getDetailProduct = useCallback(async (id) => {
    const query = firebaseFirestore.collection('sanpham')
      .where('id', "==", id)
      .limit(1);
    const snap = await query.get();
    const result = [];
    snap.forEach(doc => {
      result.push(doc.data());
    });
    return result[0]
  }, []);
  const queryDetail = useCallback(() => {

  }, []);
  const getAllProduct = useCallback(async () => {
    const snap = [];
    const result = await firebaseFirestore.collection("sanpham").get();
    result.forEach(doc => {
      snap.push(doc.data())
    });
    return snap
  }, []);
  return {
    getDetailProduct,
    getAllProduct
  };
};

export default useProduct;
