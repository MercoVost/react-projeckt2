// import { useState } from "react";

import { useState } from "react";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let errors = {};
//     if (!formData.username) {
//       errors.username = "Имя пользователя обязательно";
//     }
//     if (!formData.email) {
//       errors.email = "Email обязателен";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = "Некорректный email";
//     }
//     if (!formData.password) {
//       errors.password = "Пароль обязателен";
//     }
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const isValid = validateForm();
//     if (isValid) {
//       // Отправка данных
//       console.log(formData);
//     }
//   };

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Имя пользователя:</label>
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         {errors.username && <span>{errors.username}</span>}
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span>{errors.email}</span>}
//       </div>
//       <div>
//         <label>Пароль:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <span>{errors.password}</span>}
//       </div>
//       <button type="submit">Зарегистрироваться</button>
//     </form>
//   );
// };

// export default RegistrationForm;

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const formValidaci = () => {
    let errors = {};
    if (!formData.username) {
      errors.username = "Имя пользователя объязательно";
    }
    if (!formData.email) {
      errors.email = "email объязателбно";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Некоретный email";
    }
    if (!formData.password) {
      errors.password = "пороль объязателен";
    }
    setErrors(Object.keys(errors).length === "");
  };

  const formSubmit = () => {};

  return <></>;
}
