export const initialState = {
  // user:null,
  user: {
    id: 1,
    username: "tahmid",
    password: "12345",
    img: "https://avatars.dicebear.com/api/human/1.svg",
  },
  todos: [
    {
      id: 1,
      title: "todo 1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      reminder: "12:34",
      timestamp: "1/24/2022, 06:11:38 AM",
    },
    {
      id: 2,
      title: "todo 2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      reminder: "14:34",
      timestamp: "1/24/2022, 09:11:38 AM",
    },
    {
      id: 3,
      title: "todo 3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      reminder: "00:00",
      timestamp: "1/24/2022, 8:00:38 AM",
    },
    {
      id: 4,
      title: "todo 4",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      reminder: "08:00",
      timestamp: "1/24/2022, 10:11:38 PM",
    },
  ],
  completedTodos: [],
};
