import {useCallback} from 'react';
import {firebaseFirestore} from "../../firebaseConfig";

const useNews = () => {
  const getAllNews = useCallback(async () => {
    const query = firebaseFirestore.collection('news');
    const snap = await query.get();
    const result = [];
    snap.forEach(doc => {
      result.push(doc.data());
    });
    return result
  }, []);

  return {
    getAllNews
  };
};

export default useNews;
