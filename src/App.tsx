import { useEffect, useState } from "react";
import { client } from "./client";
import { Message, User } from "./types";

// This is a simple chat application. The user can send messages and view messages from other users.
// This file contains the main component of the application.

// 💡 TIPS:
// - Feel free to refactor the code as you see fit or to a style you are more comfortable with.
// - Feel free to use any library you want.
// - Feel free to write CSS styles as you prefer e.g. plain CSS, Tailwind.
// - You can use the `client` object to interact with the API and trust it works as expected.
// - You can assume the API is working correctly.
// - You can assume the user is authenticated, authorized, online etc.

function App() {
  // The messages which have been loaded.
  const [messages, setMessages] = useState<Array<Message> | null>(null);

  // The ID of the next message to load when scrolling up.
  const [, setNextMessageId] = useState<number | null>(null);

  // All the users who are involved in the chat.
  const [users, setUsers] = useState<Array<User> | null>(null);

  // The current user who is using the chat.
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Load the current user, all users and the initial messages.
    client.currentUser().then(setCurrentUser);
    client.users().then(setUsers);
    client.messages({ sort: "desc" }).then(({ messages, nextId }) => {
      setMessages(messages);
      setNextMessageId(nextId);
    });
  }, []);

  const isLoading = !messages || !users || !currentUser;

  if (isLoading) {
    return (
      <main className="h-svh w-svh flex flex-col items-center justify-center bg-gray-800 py-6">
        <div className="text-gray-50 text-4xl font-bold">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-svh w-svh bg-gray-800 p-8">
      <form
        className="my-8"
        onSubmit={(event) => {
          event.preventDefault();

          const input = (event.currentTarget as HTMLFormElement).text;
          const text = input.value;
          input.value = "";

          client.createMessage({ text }).then((message) => {
            setMessages((prev) => {
              if (!prev) return null;
              return [message, ...prev];
            });
          });
        }}
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

      <ul>
        {messages.map((message) => {
          return (
            <li
              key={message.id}
              className="text-gray-50 border-b border-gray-200 py-2"
            >
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
