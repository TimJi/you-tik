import useSWR from 'swr';
import { listFetcher } from './fetchers';
import { useEffect, useRef, useState } from 'react';

const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
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
  const videoRef = useRef(null);

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
      {forYouList?.length > 0
        ?
        <div
          className="flex-2 flex justify-center items-center h-[100vh]">
          <div className="h-[60vh]">
            <video
              ref={videoRef}
              src={forYouList[0].playUrl}
              poster={forYouList[0].cover}
              controls
            />
          </div>
        </div>
        : null}
    </div>
  );
}

export default App;
