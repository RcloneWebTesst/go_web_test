import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    const response = await fetch("http://127.0.0.1:5001/api/disupload", {
      method: "POST",
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h1>React + Go Fiber 연동</h1>
      <button onClick={handleUpload}>disupload 실행</button>
      <p>서버 응답: {message}</p>
    </div>
  );
}

export default App;
