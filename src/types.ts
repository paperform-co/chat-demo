export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Message {
  id: number;
  text: string;
  authorId: number;
  createdAt: string
}

export interface PaginatedMessages {
  messages: Array<Message>;
  hasMore: boolean;
  nextId: number | null;
}

export interface Data {
  currentUserId: number;
  users: Array<User>;
  messages: Array<Message>;
}