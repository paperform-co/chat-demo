import { Data } from "./types";

// This is the data that should be used to populate the chat application.
// The data includes users and messages.
// The messages are ordered by their creation date and ID in ascending order.
// Don't load the data directly in the App component, use the client object to fetch the data.

export const data: Data = {
  currentUserId: 1,
  users: [
    {
      id: 1,
      firstName: "John",
      lastName: "Maverick",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Liddell",
    },
  ],
  messages: [
    {
      id: 1,
      text: "Hey there, how's everyone doing today?",
      authorId: 1,
      createdAt: "2024-04-30T08:00:00Z",
    },
    {
      id: 2,
      text: "I'm doing great, thanks for asking! Just finished a project I've been working on.",
      authorId: 2,
      createdAt: "2024-04-30T08:05:00Z",
    },
    {
      id: 3,
      text: "That's awesome! What was the project about?",
      authorId: 3,
      createdAt: "2024-04-30T08:10:00Z",
    },
    {
      id: 4,
      text: "It was a mobile app for tracking daily exercise and nutrition.",
      authorId: 2,
      createdAt: "2024-04-30T08:15:00Z",
    },
    {
      id: 5,
      text: "Sounds interesting! I've been meaning to get into better shape.",
      authorId: 1,
      createdAt: "2024-04-30T08:20:00Z",
    },
    {
      id: 6,
      text: "You should give it a try! It's made a big difference for me.",
      authorId: 2,
      createdAt: "2024-04-30T08:25:00Z",
    },
    {
      id: 7,
      text: "I might just do that. Thanks for the recommendation!",
      authorId: 1,
      createdAt: "2024-04-30T08:30:00Z",
    },
    {
      id: 8,
      text: "No problem! Let me know if you need any tips.",
      authorId: 2,
      createdAt: "2024-04-30T08:35:00Z",
    },
    {
      id: 9,
      text: "Hey guys, what are you talking about?",
      authorId: 3,
      createdAt: "2024-04-30T08:40:00Z",
    },
    {
      id: 10,
      text: "We're discussing a fitness app that my friend here developed.",
      authorId: 1,
      createdAt: "2024-04-30T08:45:00Z",
    },
    {
      id: 11,
      text: "Oh, that sounds cool. I could use something like that.",
      authorId: 3,
      createdAt: "2024-04-30T08:50:00Z",
    },
    {
      id: 12,
      text: "Definitely worth checking out! It's been a game-changer for me.",
      authorId: 2,
      createdAt: "2024-04-30T08:55:00Z",
    },
    {
      id: 13,
      text: "I'll download it later and give it a try.",
      authorId: 3,
      createdAt: "2024-04-30T09:00:00Z",
    },
    {
      id: 14,
      text: "Let me know what you think! I'm always looking for feedback.",
      authorId: 2,
      createdAt: "2024-04-30T09:05:00Z",
    },
    {
      id: 15,
      text: "Sure thing! Thanks!",
      authorId: 3,
      createdAt: "2024-04-30T09:10:00Z",
    },
    {
      id: 16,
      text: "Hey, I heard about this new restaurant downtown. Anyone interested in trying it out?",
      authorId: 1,
      createdAt: "2024-04-30T09:15:00Z",
    },
    {
      id: 17,
      text: "I'm always up for trying new food! Count me in.",
      authorId: 3,
      createdAt: "2024-04-30T09:20:00Z",
    },
    {
      id: 18,
      text: "Sounds fun! What type of cuisine do they serve?",
      authorId: 2,
      createdAt: "2024-04-30T09:25:00Z",
    },
    {
      id: 19,
      text: "It's a fusion of Asian and Latin flavors. I've heard great things about their tacos.",
      authorId: 1,
      createdAt: "2024-04-30T09:30:00Z",
    },
    {
      id: 20,
      text: "That sounds delicious! Let's make plans for this weekend.",
      authorId: 3,
      createdAt: "2024-04-30T09:35:00Z",
    },
    {
      id: 21,
      text: "I'm down for that. Saturday evening works for me.",
      authorId: 2,
      createdAt: "2024-04-30T09:40:00Z",
    },
    {
      id: 22,
      text: "Great! I'll make a reservation. What time should I book?",
      authorId: 1,
      createdAt: "2024-04-30T09:45:00Z",
    },
    {
      id: 23,
      text: "How about 7:00 PM?",
      authorId: 3,
      createdAt: "2024-04-30T09:50:00Z",
    },
    {
      id: 24,
      text: "Works for me. Looking forward to it!",
      authorId: 2,
      createdAt: "2024-04-30T09:55:00Z",
    },
    {
      id: 25,
      text: "Me too! It's going to be a blast.",
      authorId: 1,
      createdAt: "2024-04-30T10:00:00Z",
    },
    {
      id: 26,
      text: "Hey guys, sorry to interrupt, but I just got some exciting news!",
      authorId: 2,
      createdAt: "2024-04-30T10:05:00Z",
    },
    {
      id: 27,
      text: "What's up? Don't leave us hanging!",
      authorId: 1,
      createdAt: "2024-04-30T10:10:00Z",
    },
    {
      id: 28,
      text: "I got promoted at work! I'm finally a senior developer.",
      authorId: 2,
      createdAt: "2024-04-30T10:15:00Z",
    },
    {
      id: 29,
      text: "Congratulations! That's amazing news!",
      authorId: 1,
      createdAt: "2024-04-30T10:20:00Z",
    },
    {
      id: 30,
      text: "Thanks! I couldn't have done it without the support of friends like you.",
      authorId: 2,
      createdAt: "2024-04-30T10:25:00Z",
    },
    {
      id: 31,
      text: "We're proud of you, buddy!",
      authorId: 3,
      createdAt: "2024-04-30T10:30:00Z",
    },
    {
      id: 32,
      text: "Thanks, guys. You're the best!",
      authorId: 2,
      createdAt: "2024-04-30T10:35:00Z",
    },
    {
      id: 33,
      text: "So, when are we celebrating?",
      authorId: 1,
      createdAt: "2024-04-30T10:40:00Z",
    },
    {
      id: 34,
      text: "How about dinner tonight? My treat!",
      authorId: 2,
      createdAt: "2024-04-30T10:45:00Z",
    },
    {
      id: 35,
      text: "Sounds good to me. What do you guys think?",
      authorId: 3,
      createdAt: "2024-04-30T10:50:00Z",
    },
    {
      id: 36,
      text: "Count me in!",
      authorId: 1,
      createdAt: "2024-04-30T10:55:00Z",
    },
    {
      id: 37,
      text: "I'm in too. Let's celebrate!",
      authorId: 3,
      createdAt: "2024-04-30T11:00:00Z",
    },
    {
      id: 38,
      text: "Great! I'll make a reservation for 7:30 PM.",
      authorId: 2,
      createdAt: "2024-04-30T11:05:00Z",
    },
    {
      id: 39,
      text: "Looking forward to it!",
      authorId: 1,
      createdAt: "2024-04-30T11:10:00Z",
    },
    {
      id: 40,
      text: "Me too!",
      authorId: 3,
      createdAt: "2024-04-30T11:15:00Z",
    },
    {
      id: 41,
      text: "Hey, did you guys hear about the new movie that just came out?",
      authorId: 1,
      createdAt: "2024-04-30T11:20:00Z",
    },
    {
      id: 42,
      text: "No, what's it called?",
      authorId: 3,
      createdAt: "2024-04-30T11:25:00Z",
    },
    {
      id: 43,
      text: "It's called 'The Midnight Detective.' I heard it's a thriller.",
      authorId: 2,
      createdAt: "2024-04-30T11:30:00Z",
    },
    {
      id: 44,
      text: "I love thrillers! We should go see it together.",
      authorId: 1,
      createdAt: "2024-04-30T11:35:00Z",
    },
    {
      id: 45,
      text: "Count me in too. When's a good time?",
      authorId: 3,
      createdAt: "2024-04-30T11:40:00Z",
    },
    {
      id: 46,
      text: "How about Saturday afternoon?",
      authorId: 2,
      createdAt: "2024-04-30T11:45:00Z",
    },
    {
      id: 47,
      text: "Sounds good to me. What time?",
      authorId: 1,
      createdAt: "2024-04-30T11:50:00Z",
    },
    {
      id: 48,
      text: "Let's aim for 3:00 PM.",
      authorId: 3,
      createdAt: "2024-04-30T11:55:00Z",
    },
    {
      id: 49,
      text: "Perfect! I'll buy the tickets tomorrow.",
      authorId: 2,
      createdAt: "2024-04-30T12:00:00Z",
    },
    {
      id: 50,
      text: "Looking forward to it!",
      authorId: 1,
      createdAt: "2024-04-30T12:05:00Z",
    },
    {
      id: 51,
      text: "Me too!",
      authorId: 3,
      createdAt: "2024-04-30T12:10:00Z",
    },
    {
      id: 52,
      text: "Hey guys, I have a question. Do you prefer coffee or tea?",
      authorId: 1,
      createdAt: "2024-04-30T12:15:00Z",
    },
    {
      id: 53,
      text: "Definitely coffee for me. Can't start my day without it!",
      authorId: 2,
      createdAt: "2024-04-30T12:20:00Z",
    },
    {
      id: 54,
      text: "I'm more of a tea person myself. It's so soothing.",
      authorId: 3,
      createdAt: "2024-04-30T12:25:00Z",
    },
    {
      id: 55,
      text: "I like both, depending on my mood. But I think I lean towards coffee overall.",
      authorId: 1,
      createdAt: "2024-04-30T12:30:00Z",
    },
    {
      id: 56,
      text: "Coffee seems to be the winner here!",
      authorId: 2,
      createdAt: "2024-04-30T12:35:00Z",
    },
    {
      id: 57,
      text: "Indeed! Nothing beats a good cup of joe.",
      authorId: 1,
      createdAt: "2024-04-30T12:40:00Z",
    },
    {
      id: 58,
      text: "Agreed. It's like a hug in a mug.",
      authorId: 3,
      createdAt: "2024-04-30T12:45:00Z",
    },
    {
      id: 59,
      text: "Now I'm craving coffee!",
      authorId: 2,
      createdAt: "2024-04-30T12:50:00Z",
    },
    {
      id: 60,
      text: "Let's grab some after work!",
      authorId: 1,
      createdAt: "2024-04-30T12:55:00Z",
    },
    {
      id: 61,
      text: "Sounds like a plan!",
      authorId: 3,
      createdAt: "2024-04-30T13:00:00Z",
    },
    {
      id: 62,
      text: "Hey, have you guys ever traveled abroad?",
      authorId: 1,
      createdAt: "2024-04-30T13:05:00Z",
    },
    {
      id: 63,
      text: "Yes, I went to Europe last summer. It was amazing!",
      authorId: 3,
      createdAt: "2024-04-30T13:10:00Z",
    },
    {
      id: 64,
      text: "I've always wanted to travel abroad, but I haven't had the chance yet.",
      authorId: 2,
      createdAt: "2024-04-30T13:15:00Z",
    },
    {
      id: 65,
      text: "You should definitely make it happen someday. It's such a rewarding experience.",
      authorId: 1,
      createdAt: "2024-04-30T13:20:00Z",
    },
    {
      id: 66,
      text: "I plan to! Hopefully, soon.",
      authorId: 2,
      createdAt: "2024-04-30T13:25:00Z",
    },
    {
      id: 67,
      text: "Where would you like to go first?",
      authorId: 3,
      createdAt: "2024-04-30T13:30:00Z",
    },
    {
      id: 68,
      text: "I've always dreamed of visiting Japan. The culture fascinates me.",
      authorId: 2,
      createdAt: "2024-04-30T13:35:00Z",
    },
    {
      id: 69,
      text: "That sounds amazing! I'd love to go there too.",
      authorId: 1,
      createdAt: "2024-04-30T13:40:00Z",
    },
    {
      id: 70,
      text: "Japan is definitely on my travel bucket list as well.",
      authorId: 3,
      createdAt: "2024-04-30T13:45:00Z",
    },
    {
      id: 71,
      text: "Maybe we should plan a trip together someday!",
      authorId: 2,
      createdAt: "2024-04-30T13:50:00Z",
    },
    {
      id: 72,
      text: "That would be incredible! Count me in!",
      authorId: 1,
      createdAt: "2024-04-30T13:55:00Z",
    },
    {
      id: 73,
      text: "I'm all for it! Let's start saving up.",
      authorId: 3,
      createdAt: "2024-04-30T14:00:00Z",
    },
    {
      id: 74,
      text: "Absolutely! It'll be the trip of a lifetime.",
      authorId: 2,
      createdAt: "2024-04-30T14:05:00Z",
    },
    {
      id: 75,
      text: "Hey, did you guys see the latest episode of that new TV series?",
      authorId: 1,
      createdAt: "2024-04-30T14:10:00Z",
    },
    {
      id: 76,
      text: "No, I haven't had a chance to catch up on it yet.",
      authorId: 3,
      createdAt: "2024-04-30T14:15:00Z",
    },
    {
      id: 77,
      text: "It's really good! You should definitely watch it when you get the chance.",
      authorId: 1,
      createdAt: "2024-04-30T14:20:00Z",
    },
    {
      id: 78,
      text: "What's it about?",
      authorId: 2,
      createdAt: "2024-04-30T14:25:00Z",
    },
    {
      id: 79,
      text: "It's a mystery thriller about a group of friends who uncover dark secrets in their small town.",
      authorId: 1,
      createdAt: "2024-04-30T14:30:00Z",
    },
    {
      id: 80,
      text: "Sounds intriguing. I'll add it to my watchlist.",
      authorId: 2,
      createdAt: "2024-04-30T14:35:00Z",
    },
    {
      id: 81,
      text: "You won't be disappointed!",
      authorId: 1,
      createdAt: "2024-04-30T14:40:00Z",
    },
    {
      id: 82,
      text: "I'll check it out too. Thanks for the recommendation!",
      authorId: 3,
      createdAt: "2024-04-30T14:45:00Z",
    },
    {
      id: 83,
      text: "Anytime! Let me know what you think after you watch it.",
      authorId: 1,
      createdAt: "2024-04-30T14:50:00Z",
    },
    {
      id: 84,
      text: "Will do!",
      authorId: 3,
      createdAt: "2024-04-30T14:55:00Z",
    },
    {
      id: 85,
      text: "Hey guys, what are your plans for the weekend?",
      authorId: 2,
      createdAt: "2024-04-30T15:00:00Z",
    },
    {
      id: 86,
      text: "I'm going to the beach with some friends. It's supposed to be really nice weather.",
      authorId: 1,
      createdAt: "2024-04-30T15:05:00Z",
    },
    {
      id: 87,
      text: "That sounds fun! I might go hiking in the mountains.",
      authorId: 3,
      createdAt: "2024-04-30T15:10:00Z",
    },
    {
      id: 88,
      text: "I'm just planning to relax at home and catch up on some reading.",
      authorId: 2,
      createdAt: "2024-04-30T15:15:00Z",
    },
    {
      id: 89,
      text: "Sounds like a nice weekend all around!",
      authorId: 1,
      createdAt: "2024-04-30T15:20:00Z",
    },
    {
      id: 90,
      text: "Definitely! Sometimes it's good to just unwind and recharge.",
      authorId: 3,
      createdAt: "2024-04-30T15:25:00Z",
    },
    {
      id: 91,
      text: "I couldn't agree more.",
      authorId: 2,
      createdAt: "2024-04-30T15:30:00Z",
    },
    {
      id: 92,
      text: "Hey, have you guys tried that new sushi place downtown?",
      authorId: 1,
      createdAt: "2024-04-30T15:35:00Z",
    },
    {
      id: 93,
      text: "Not yet, but I've heard good things about it.",
      authorId: 3,
      createdAt: "2024-04-30T15:40:00Z",
    },
    {
      id: 94,
      text: "I went there last week. The sushi was amazing!",
      authorId: 2,
      createdAt: "2024-04-30T15:45:00Z",
    },
    {
      id: 95,
      text: "We should definitely go there together sometime.",
      authorId: 1,
      createdAt: "2024-04-30T15:50:00Z",
    },
    {
      id: 96,
      text: "Count me in! I can never say no to sushi.",
      authorId: 3,
      createdAt: "2024-04-30T15:55:00Z",
    },
    {
      id: 97,
      text: "How about next Friday evening?",
      authorId: 2,
      createdAt: "2024-04-30T16:00:00Z",
    },
    {
      id: 98,
      text: "Sounds like a plan. I'll make a reservation.",
      authorId: 1,
      createdAt: "2024-04-30T16:05:00Z",
    },
    {
      id: 99,
      text: "Looking forward to it!",
      authorId: 3,
      createdAt: "2024-04-30T16:10:00Z",
    },
    {
      id: 100,
      text: "Me too!",
      authorId: 2,
      createdAt: "2024-04-30T16:15:00Z",
    },
    {
      id: 101,
      text: "Hey, did you guys see the game last night?",
      authorId: 1,
      createdAt: "2024-04-30T16:20:00Z",
    },
    {
      id: 102,
      text: "No, I missed it. Who won?",
      authorId: 3,
      createdAt: "2024-04-30T16:25:00Z",
    },
    {
      id: 103,
      text: "Our team won by a landslide! It was an amazing game.",
      authorId: 1,
      createdAt: "2024-04-30T16:30:00Z",
    },
    {
      id: 104,
      text: "That's awesome! I'll have to watch the highlights later.",
      authorId: 2,
      createdAt: "2024-04-30T16:35:00Z",
    },
    {
      id: 105,
      text: "Definitely! It was one for the books.",
      authorId: 1,
      createdAt: "2024-04-30T16:40:00Z",
    },
    {
      id: 106,
      text: "I can't wait to see them in action next time.",
      authorId: 3,
      createdAt: "2024-04-30T16:45:00Z",
    },
    {
      id: 107,
      text: "They're on fire this season!",
      authorId: 2,
      createdAt: "2024-04-30T16:50:00Z",
    },
    {
      id: 108,
      text: "Hey, have you guys ever tried skydiving?",
      authorId: 1,
      createdAt: "2024-04-30T16:55:00Z",
    },
    {
      id: 109,
      text: "No, but it's on my bucket list!",
      authorId: 3,
      createdAt: "2024-04-30T17:00:00Z",
    },
    {
      id: 110,
      text: "I've done it once before. It was exhilarating!",
      authorId: 2,
      createdAt: "2024-04-30T17:05:00Z",
    },
    {
      id: 111,
      text: "That sounds terrifying and amazing at the same time.",
      authorId: 1,
      createdAt: "2024-04-30T17:10:00Z",
    },
    {
      id: 112,
      text: "It definitely gets your adrenaline pumping!",
      authorId: 2,
      createdAt: "2024-04-30T17:15:00Z",
    },
    {
      id: 113,
      text: "Maybe we should all go together sometime.",
      authorId: 3,
      createdAt: "2024-04-30T17:20:00Z",
    },
    {
      id: 114,
      text: "That would be epic!",
      authorId: 1,
      createdAt: "2024-04-30T17:25:00Z",
    },
    {
      id: 115,
      text: "Count me in!",
      authorId: 2,
      createdAt: "2024-04-30T17:30:00Z",
    },
    {
      id: 116,
      text: "I'm in too!",
      authorId: 3,
      createdAt: "2024-04-30T17:35:00Z",
    },
    {
      id: 117,
      text: "We should start planning it soon.",
      authorId: 1,
      createdAt: "2024-04-30T17:40:00Z",
    },
    {
      id: 118,
      text: "Definitely! It'll be an adventure to remember.",
      authorId: 2,
      createdAt: "2024-04-30T17:45:00Z",
    },
    {
      id: 119,
      text: "I can't wait!",
      authorId: 3,
      createdAt: "2024-04-30T17:50:00Z",
    },
    {
      id: 120,
      text: "It's going to be epic!",
      authorId: 1,
      createdAt: "2024-04-30T17:55:00Z",
    },
  ],
};
