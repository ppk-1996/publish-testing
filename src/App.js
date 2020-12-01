import Axios from "axios";
import React from "react";
function App() {
  return (
    <div className="App">
      <form onSubmit={publishJudgment}>
        <button>Publish</button>
      </form>
    </div>
  );
}
export default App;
function publishJudgment(e) {
  e.preventDefault();
  var url = "http://localhost:8071/api/judgments/publish/";
  var query = {
    userId: 4,
    userName: "thiha@cjs.com",
    publishedDate: "2020-12-1",
    publisherEmail: "thiha@cjs.com",
    id: 118,
  };
  var token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aGloYUBjanMuY29tIiwiZXhwIjozMjg2NDM2ODQzLCJpYXQiOjE2MDY4MjA4NDN9.zQUZ9zwbtiTBh-py687bDq-JCBDup2T5SIztV95jgi_BG_JBHbIxaCuyz5oxLJQhLad1Fl5PzKGWHDGSDUFmMg";
  Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  Axios.put(url, query, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "Application/json",
      item: "thiha@cjs.com",
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}
