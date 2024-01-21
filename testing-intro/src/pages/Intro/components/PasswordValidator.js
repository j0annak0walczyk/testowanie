import React from "react";

export const PasswordValidator = () => {
  return (
    <article>
      <p>Password validator</p>
      <input type="password" />
      <p>Hasło jest za długie max 8 znaków</p>
      <p>Hasło jest za krótkie min 3 znaki</p>
      <p>Hasło powinno zawierać jeden ze znaków specjalnych ! @ # $ %</p>
      <p>Hasło jest OK</p>
      <button>Validate</button>
    </article>
  );
};
