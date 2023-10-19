import { useContext, useState } from "react";
import { createContext } from "react";

const TweetContext = createContext();

function TweetProvider({ children }) {
  const [verified, setVerified] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <TweetContext.Provider
      value={{
        verified,
        setVerified,
        retweeted,
        setRetweeted,
        liked,
        setLiked,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
}

export function useTweet() {
  const context = useContext(TweetContext);
  return context;
}

export default TweetProvider;
