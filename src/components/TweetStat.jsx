import { useTweet } from "../contexts/TweetContext";

const formatter = Intl.NumberFormat("tr", {
  notation: "compact",
  maximumFractionDigits: 1,
});

function TweetStat({ tweet }) {
  const { liked } = useTweet();

  return (
    <div className={`${"flex items-center justify-start flex-1"} `}>
      {tweet.name !== "like" && tweet.img}
      {tweet.name === "like" && liked === false
        ? tweet.img.notLiked
        : tweet.img.liked}
      <span className="px-2 text-[13px] leading-5">
        {formatter.format(tweet.amount)}
      </span>
    </div>
  );
}

export default TweetStat;
