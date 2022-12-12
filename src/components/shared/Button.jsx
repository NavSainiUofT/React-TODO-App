import React from "react";

function Button({
  children,
  version,
  type,
  isDisabled,
}) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
