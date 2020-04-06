import {useCallback} from 'react';
import {firebaseFirestore} from "../../firebaseConfig";

const useFakeData = (props) => {
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
  const fakeNews = useCallback((news) => {
    firebaseFirestore.collection('news').add({
        ...news
      });
  }, []);
  return {
    fakeThumbs,
    fakeVersion,
    fakeNews
  };
};

export default useFakeData;
