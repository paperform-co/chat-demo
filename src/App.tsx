import { useEffect, useState, UIEvent } from "react";
import { client } from "./client";
import { Message, User } from "./types";

// TASK 🚀
// Improve this POC chat application UI by implementing the following features:
// 1. Messages should be displayed with the newest at the bottom.
// 2. The message field should be at the bottom of the screen and the messages should be above it.
// 3. The message field should be sticky to the bottom of the screen.
// 4. Scrolling to the top of the chat should load more messages.
// 5. Improve the UI/UX as you see fit.

// 💡 TIPS:
// - Feel free to refactor the code as you see fit or to a style you are more comfortable with.
// - Feel free to use any library you want.
// - Feel free to write CSS styles as you prefer e.g. plain CSS, Tailwind.
// - You can use the `client` object to interact with the API and trust it works as expected.
// - You can assume the API is working correctly.
// - You can assume the user is authenticated, authorized, online etc.

function App() {
  // change type for messages to an array and default to []
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [nextMessageId, setNextMessageId] = useState<number | null>(null);
  const [users, setUsers] = useState<Array<User> | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // extract data retrieval to separate function for use within handleScroll and initial load
  const fetchData = () => {
    // 1 - sort order, 'desc' to 'asc'
    // 4 - add afterId
    client.messages({ sort: "asc", afterId: nextMessageId}).then(({ messages: retrievedMessages, nextId }) => {
      // we can always concat as the default is set to a blank array
      setMessages(messages.concat(retrievedMessages))
      setNextMessageId(nextId);
    });
  }

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    if (!isLoading && event.currentTarget.scrollTop === 0) {
      fetchData();
    }
  };

  useEffect(() => {
    client.currentUser().then(setCurrentUser);
    client.users().then(setUsers);
    
    // reset back to default
    setMessages([])
    setNextMessageId(null)
    
    fetchData()
  
    // TODO - understand useEffect dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading = !messages || !users || !currentUser;

  // TODO - understand what the event should be here
  const handleSubmit = (event) => {
    event.preventDefault();

    const input = (event.currentTarget as HTMLFormElement).text;
    const text = input.value;
    input.value = "";

    client.createMessage({ text }).then((message) => {
      setMessages((prev) => {
        if (!prev) return null;
        // swap order to put message at bottom
        return [...prev, message];
      });
    })
  }

  const MessageCard = ({message} : {message: Message}) => {
    const authorClassName = message.authorId === currentUser?.id ? 'float-end text-right bg-cyan-700' : 'bg-yellow-800'
    
    const createdAt = new Date(message.createdAt)
    const hours = `0${createdAt.getHours()}`
    const minutes = `0${createdAt.getMinutes()}`

    return (
      <div className={`w-5/6 border-solid rounded-lg p-3 ${authorClassName}`}>
        <pre className="text-sm italic">{hours.substring(hours.length-2)}:{minutes.substring(minutes.length-2)}</pre>
        {message.text}
      </div>
    )
  }

  const MessageList = () => 
    (
      <>
        <ul className="h-[500px] overflow-y-scroll p-2" onScroll={handleScroll}>
          {messages.map((message) => {
            return (
              <li
                key={message.id}
                className="text-gray-50 py-2 clear-both"
              >
                <MessageCard message={message} />
              </li>
            );
          })}
        </ul>
      </>
    )

  const ChatForm = () => 
    (
      <form
        className="my-8 float-end"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="text"
          className="bg-gray-300 rounded-lg p-2 text-gray-800 placeholder:text-gray-500"
          placeholder="Your message..."
        />
        <button
          type="submit"
          className="p-2 text-gray-50 mx-2 border border-gray-50 rounded-lg"
        >
          Send
        </button>
      </form>
    )

  if (isLoading) {
    return (
      <main className="h-svh w-svh flex flex-col items-center justify-center bg-gray-800 py-6">
        <div className="text-gray-50 text-4xl font-bold">Loading...</div>
      </main>
    );
  }

  // 2 - move UL from bottom to top
  return (
    <main className="min-h-svh w-svh bg-gray-800 p-8 w-[400px]">
      <div>
        <MessageList />

        <ChatForm />
      </div>
    </main>
  );
}

export default App;
