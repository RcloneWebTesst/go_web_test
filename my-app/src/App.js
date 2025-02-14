import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [path, setPath] = useState("");

  const handleUpload = async () => {
    if (!path.trim()){
      setMessage("패스를 입력하세요");
      return;
    }
    
    try{
      const formData = new FormData();
      formData.append("path",path);

      const response = await fetch("http://127.0.0.1:5001/api/disupload", {
        method: "POST",
        body: formData,
      });

      if(!response.ok){
        throw new Error(`서버 오류: ${response.status}`)
      }
      const data = await response.json();
      setMessage(`${data.message}, 받은 경로 : ${data.received_Path}`);

    }
    
    catch (error){
      setMessage(`요쳥실패 : ${error.message}`)
    }
  };

  return (
    <div>
      <h1>React + Go Fiber 연동</h1>
      <input type="text" placeholder="패스 압력" value={path} onChange={(e) => setPath(e.target.value)} />
      <button onClick={handleUpload}>disupload 실행</button>
      <p>서버 응답: {message}</p>
    </div>
  );
}

export default App;
