import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
      <img
  src="/images/drive/mypic.jpeg"
  alt="Shivang Yadav"
  style={{
    borderRadius: "50%",
    width: "250px",
    height: "250px",
    objectFit: "cover",
    objectPosition: "center 85%",
  }}

/>   

          <h4 className="mt-5">Shivang Yadav</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Shivang built this platform from scratch as a personal project to
            understand how modern trading platforms work under the hood. What
            started as a learning exercise turned into a full-fledged clone
            covering the frontend, backend, and dashboard.
          </p>
          <p>
            He is passionate about web development and enjoys breaking down
            complex products to rebuild them from the ground up as a way to
            master new technologies.
          </p>
          <p>Coding late into the night is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;