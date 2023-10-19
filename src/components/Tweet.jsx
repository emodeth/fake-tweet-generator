import { tweetStats } from "../utils/tweetStats";
import TweetImage from "./TweetImage";
import TweetStat from "./TweetStat";
import TweetShareIcon from "./TweetShareIcon";
import TweetHeader from "./TweetHeader";

function Tweet() {
  return (
    <div className="flex gap-3 text-[#e7e9ea] max-w-[600px] px-4 py-3 border border-[#2f3336]">
      <TweetImage />
      <div>
        <TweetHeader />
        <p>
          Türk milletine teveccüh edecek her türlü tehlikeyi, kemal-i şiddetle
          men!
        </p>
        <div className="flex gap-1 mt-3 text-[#71767b]">
          {tweetStats.map((tweet, index) => (
            <TweetStat tweet={tweet} key={index} />
          ))}
          <TweetShareIcon />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
