import React, { useState } from "react";

const TodoState = ({ children }) => {
  const [isStriked, setIsStriked] = useState(false);

  return (
    <p onClick={()=>{isStriked?setIsStriked(false):setIsStriked(true)}}>
      {isStriked ? <span><s>{children}</s> <>✔️ Done!</></span> : <span><>{children}</> <>❌</></span>}
    </p>
  );
};

export default TodoState;
