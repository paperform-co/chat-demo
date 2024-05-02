import { Message, PaginatedMessages, User } from "./types";

class Client {
  currentUser = (): Promise<User> => {
    return this.fetch("/me");
  };

  users = (): Promise<Array<User>> => {
    return this.fetch("/users");
  };

  messages = (options?: {
    afterId?: number | null;
    sort?: "asc" | "desc";
  }): Promise<PaginatedMessages> => {
    if (options) {
      const queryParams = new URLSearchParams();
      if (options.afterId) {
        queryParams.set("afterId", options.afterId.toString());
      }
      if (options.sort) {
        queryParams.set("sort", options.sort);
      }

      return this.fetch(`/messages?${queryParams.toString()}`);
    }

    return this.fetch(`/messages`);
  };

  createMessage = (body: { text: string }): Promise<Message> => {
    return this.fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  private fetch(path: string, init?: RequestInit) {
    return fetch(`https://chat-demo.com${path}`, init).then((response) => {
      return response.json();
    });
  }
}

export const client = new Client();
