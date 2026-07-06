import React from "react";

function SignUp() {
  return (
    <div className="container text-center my-5">
  <button
    className="btn btn-primary btn-lg px-4 py-2 shadow"
    onClick={() => (window.location.href = "http://localhost:3000")}
  >
    Continue to Dashboard →
  </button>
</div>
  );
}

export default SignUp;