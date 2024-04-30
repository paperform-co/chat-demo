import { http, HttpResponse } from "msw";
import { Message, PaginatedMessages, User } from "../types";
import { data } from "../data";

export const handlers = [
  http.get("https://chat-demo.com/me", () => {
    return HttpResponse.json<User>(
      data.users.find((user) => user.id === data.currentUserId)
    );
  }),

  http.get("https://chat-demo.com/users", () => {
    return HttpResponse.json<Array<User>>(data.users);
  }),

  http.get("https://chat-demo.com/messages", ({ request }) => {
    const { searchParams } = new URL(request.url);

    const sort = searchParams.get("sort") || "desc";
    if (sort !== "asc" && sort !== "desc") {
      return HttpResponse.json(
        { error: "Invalid sort parameter." },
        { status: 422 }
      );
    }

    const sortedMessages = [...data.messages].sort((a, b) => {
      if (sort === "asc") {
        return a.id - b.id;
      }

      return b.id - a.id;
    });

    const afterId = searchParams.get("afterId");
    const cursor = afterId
      ? sortedMessages.findIndex((message) => message.id === Number(afterId))
      : 0;

    const pageSize = 10;

    const messages = sortedMessages.slice(cursor, cursor + pageSize);
    const hasMore = cursor + pageSize < data.messages.length;
    const nextCursor = hasMore ? sortedMessages[cursor + pageSize].id : null;

    return HttpResponse.json<PaginatedMessages>({
      messages,
      hasMore,
      nextId: nextCursor,
    });
  }),

  http.post<never, { text: string }>(
    "https://chat-demo.com/messages",
    async ({ request }) => {
      const requestBody = await request.json();
      const nextId = [...data.messages].sort((a, b) => b.id - a.id)[0].id + 1;

      const newMessage: Message = {
        id: nextId,
        authorId: data.currentUserId,
        text: requestBody.text,
        createdAt: new Date().toISOString(),
      };

      if (typeof newMessage.text !== "string") {
        return HttpResponse.json(
          { error: "Invalid message text." },
          { status: 422 }
        );
      }

      data.messages.unshift(newMessage);

      return HttpResponse.json<Message>(newMessage, { status: 201 });
    }
  ),
];
