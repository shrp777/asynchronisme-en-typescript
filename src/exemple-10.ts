import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000
});

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

async function fetchUsers(): Promise<Array<User> | undefined> {
  const uri = `/users`;
  try {
    const response = await api.get<Array<User>>(uri);
    const users = response.data.map<User>((user) => ({
      id: user.id,
      name: user.name,
      username: user.name,
      email: user.email
    }));
    return users;
  } catch (error) {
    console.error(`Error while fetching users`, error);
  }
}

const users: Array<User> | undefined = await fetchUsers();

console.log(users);

/*
[
  {
    id: 1,
    name: "Leanne Graham",
    username: "Leanne Graham",
    email: "Sincere@april.biz",
  }, {
    id: 2,
    name: "Ervin Howell",
    username: "Ervin Howell",
    email: "Shanna@melissa.tv",
  }, {
    id: 3,
    name: "Clementine Bauch",
    username: "Clementine Bauch",
    email: "Nathan@yesenia.net",
  }, {
    id: 4,
    name: "Patricia Lebsack",
    username: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
  }, {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
  }, {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
  }, {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
  }, {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
  }, {
    id: 9,
    name: "Glenna Reichert",
    username: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
  }, {
    id: 10,
    name: "Clementina DuBuque",
    username: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
  }
]
*/
