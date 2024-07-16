import { useEffect, useState } from "react";
import axios from "axios";

export default function DateFreeAPI() {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers2(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Список ползователей fetch</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      <h1>Список ползователей axios</h1>
      <ol>
        {users2.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </>
  );
}
