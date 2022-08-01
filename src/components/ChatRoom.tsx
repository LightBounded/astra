import Filter from "bad-words";
import { User } from "firebase/auth";
import { limitToLast, orderBy, serverTimestamp } from "firebase/firestore";
import { FC, FormEvent, useRef, useState } from "react";
import useCollection from "../hooks/useCollection";
import { Message } from "../types";
import ChatMessage from "./ChatMessage";

interface ChatRoomProps {
  user: User;
}

const ChatRoom: FC<ChatRoomProps> = ({
  user: { displayName, uid, photoURL },
}) => {
  const { docs: messages, add } = useCollection<Message>("messages", [
    limitToLast(25),
    orderBy("createdAt"),
  ]);
  const [formValue, setFormValue] = useState("");
  const dummy = useRef<HTMLSpanElement>(null);

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filter = new Filter();

    if (!formValue.trim()) {
      return;
    }

    add({
      displayName,
      uid,
      photoURL,
      text: filter.isProfane(formValue.replace(/\s/g, ""))
        ? "I just tried to say something inappropriate :("
        : formValue,
      createdAt: serverTimestamp(),
    });

    setFormValue("");

    dummy.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-auto flex w-full flex-1 flex-col overflow-y-auto px-4 md:container">
      <div className="my-4 flex flex-1 flex-col gap-4 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
        <span ref={dummy}></span>
      </div>
      <form onSubmit={sendMessage} className="flex flex-none pb-4">
        <input
          type="text"
          className="input input-bordered flex-grow"
          placeholder="Say something nice :D"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatRoom;
