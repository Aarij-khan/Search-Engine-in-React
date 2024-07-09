import { useEffect, useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [button, setbutton] = useState("");
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [load2, setLoad2] = useState(false);
  const [img, setImg] = useState(true);

  const takeBtn = () => {
    if (input != "") {
      setInput("");
      setbutton(input);
      setLoad2(true);
    }
    setTimeout(() => {
      setShow(true);
      setLoad2(false);
    }, 2000);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
      setImg(false);
    }, 3000);
  }, []);
  return (
    <>
      {img && (
        <div className="flex justify-center items-center h-[100vh]  w-[100vw]">
          <img
            className="h-[350px] w-[300px]"
            src={require("./assets/gif loader.gif")}
          />
        </div>
      )}
      {load2 && (
        <img
          className="h-[150px] w-[200px] absolute top-[260px] right-[600px] rounded-3xl"
          src={require("./assets/gif loader2.gif")}
          alt=""
        />
      )}
      {load && (
        <>
          <div className="w-[100vw] flex justify-center gap-4 mt-6">
            <input
              type="text"
              placeholder="*Enter your Name"
              onChange={(e) => setInput(e.target.value)}
              className="h-[45px] w-[30vw] border-2 border-black rounded-lg"
              value={input}
            />
            <button
              onClick={takeBtn}
              className="bg-orange-400 h-11.5 rounded-lg px-3"
            >
              generate
            </button>
          </div>

          {show && (
            <>
              <h1 className="absolute top-[220px] left-[525px]  bg-white w-[300px] h-[50px] text-3xl text-center font-bold">
                {button.toUpperCase()}
              </h1>
              <img
                className="h-[480px] w-[900px] ml-[230px] mt-[20px]"
                src="https://www.techmagic.co/blog/content/images/2020/12/Screenshot-2020-12-18-at-16.19.45.png"
              />
              <div className="w-[100vw] text-center mt-6">
                <a
                  href=""
                  className="text-2xl bg-amber-400 px-2 py-1  hover:bg-yellow-500 rounded-lg"
                  download={
                    "https://www.techmagic.co/blog/content/images/2020/12/Screenshot-2020-12-18-at-16.19.45.png"
                  }
                >
                  Download Certificate
                </a>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
