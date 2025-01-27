type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

async function fetchUser(userId: number): Promise<User | undefined> {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  try {
    const response = await fetch(url);
    const user = await response.json();
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
