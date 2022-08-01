import { FC, SyntheticEvent } from "react";
import discord from "../assets/discord.webp";
import { Message } from "../types";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: FC<ChatMessageProps> = ({
  message: { displayName, photoURL, text },
}) => {
  return (
    <div className="flex w-full gap-2">
      <div className="avatar mr-1.5">
        <div className="h-11 w-11 rounded-full">
          <img
            src={photoURL || discord}
            alt="User avatar"
            onError={(e: SyntheticEvent<HTMLImageElement>) =>
              ((e.target as HTMLImageElement).src = discord)
            }
          />
        </div>
      </div>
      <div className="mr-12 w-full">
        <div className="font-semibold">{displayName}</div>
        <p className="text-sm leading-5">{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
