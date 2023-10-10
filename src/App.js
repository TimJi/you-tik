import useSWR from 'swr';
import { listFetcher } from './fetchers';
import { useEffect, useState } from 'react';

const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  const {
    data: followingList,
    error: followingError,
    isLoading: followingIsLoading
  } = useSWR(isMounted ? '/following_list' : null, listFetcher)
  const {
    data: forYouList,
    error: forYouError,
    isLoading: forYouIsLoading
  } = useSWR(isMounted ? '/for_you_list' : null, listFetcher)

  useEffect(() => {
    setIsMounted(true);
  });

  useEffect(() => {
    console.log({ followingList });
  }, [followingList]);

  useEffect(() => {
    console.log({ forYouList });
  }, [forYouList]);

  return (
    <div>
      {forYouList?.items?.length > 0
        ? <img src={followingList.items[0].cover} alt="logo" />
        : null}
    </div>
  );
}

export default App;
