import {useCallback} from 'react';
import {firebaseFirestore} from "../../firebaseConfig";

const useAccessory = () => {
  const getAllAccessory = useCallback(async () => {
    const snap = [];
    const result = await firebaseFirestore.collection("phutung").get();
    result.forEach(doc => {
      snap.push(doc.data())
    });
    return snap
  }, []);
  return {
    getAllAccessory
  };
};

export default useAccessory;
