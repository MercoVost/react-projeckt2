import { useEffect, useState } from "react";

export default function DateFreeAPI() {
  const [users, setUsers] = useState([]);
  //const [users2, setUsers2] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((respense) => setUsers2(respense.date));
  // }, []);

  return (
    <>
      <h1>Список ползователей fetch</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      <h1>Список ползователей axios//</h1>
    </>
  );
}
