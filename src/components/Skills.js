import React, { useContext } from "react";
import { FormContext } from "./Form";

export default () => {
  const ctx = useContext(FormContext);

  const addToList = (value) => ctx.setLikes([value, ...ctx.likes]);

  const removeFromList = (value) => {
    ctx.setLikes(ctx.likes.filter((v) => v !== value));
  };

  return (
    <div>
      <p>Email: {ctx.email}</p>
      <label>
        <input
          type="checkbox"
          onChange={(ev) =>
            ev.target.checked ? addToList("Ruby") : removeFromList("Ruby")
          }
          name="likes[]"
        />
        Ruby
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(ev) =>
            ev.target.checked
              ? addToList("Javascript")
              : removeFromList("Javascript")
          }
          name="likes[]"
        />
        Javascript
      </label>
    </div>
  );
};
