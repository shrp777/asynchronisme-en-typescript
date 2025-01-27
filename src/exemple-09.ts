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

async function fetchUser(userId: number): Promise<User | undefined> {
  const uri = `/users/${userId}`;
  try {
    const response = await api.get<User>(uri);
    const user = response.data;
    return {
      id: user.id,
      name: user.name,
      username: user.name,
      email: user.email
    };
  } catch (error) {
    console.error(`Error while fetching user ${userId}`, error);
  }
}

const user: User | undefined = await fetchUser(1);

console.log(user);

/*
{
  id: 1,
  name: "Leanne Graham",
  username: "Leanne Graham",
  email: "Sincere@april.biz",
}
*/
