import {useCallback} from 'react';
import {firebaseFirestore} from "../../firebaseConfig";

const useFakeData = () => {
  const fakeVersion = useCallback((id, version) => {
    firebaseFirestore.collection('sanpham')
      .doc(id)
      .set({
        version
      }, {merge: true});
  }, []);
  const fakeThumbs = useCallback((id, thumbs) => {
    firebaseFirestore.collection('sanpham')
      .doc(id)
      .set({
        thumbs
      }, {merge: true});
  }, []);
  return {
    fakeThumbs,
    fakeVersion
  };
};

export default useFakeData;
