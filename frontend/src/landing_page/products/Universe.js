import React from "react";

function Universe() {
  const logoStyle = {
    maxWidth: "150px",
    maxHeight: "60px",
    objectFit: "contain",
  };

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/images/drive/smallcaseLogo.png" alt="Smallcase" style={logoStyle} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/drive/streakLogo.png" alt="Streak" style={logoStyle} />
          <p className="text-small text-muted">Algorithmic trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/drive/sensibullLogo.svg" alt="Sensibull" style={logoStyle} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/drive/goldenpiLogo.png" alt="Golden Pi" style={logoStyle} />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/drive/dittoLogo.png" alt="Ditto" style={logoStyle} />
          <p className="text-small text-muted">Personalised insurance advice</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/images/drive/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={logoStyle}
          />
          <p className="text-small text-muted">
            Simple and transparent mutual funds
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;