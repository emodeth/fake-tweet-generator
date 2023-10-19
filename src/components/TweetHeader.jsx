import { useTweet } from "../contexts/TweetContext";
import TweetMoreIcon from "./TweetMoreIcon";
import VerifiedLogo from "./VerifiedLogo";

function TweetHeader() {
  const { verified } = useTweet();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-[15px] font-bold flex items-center">
          <span className="leading-5">emodeth</span>
          {verified && <VerifiedLogo />}
        </div>
        <span className="ml-1 text-[#71767b]">
          @emodethistaken<span className="px-1">·</span>30 Ağu
        </span>
      </div>
      <TweetMoreIcon />
    </div>
  );
}

export default TweetHeader;
