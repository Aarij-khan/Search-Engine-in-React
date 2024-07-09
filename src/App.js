import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [orginalData, setorginalData] = useState([]);
 const [input ,setInput] = useState("")
 console.log(input);
  useEffect(() => {
    fetchingApi();
  }, []);

  const fetchingApi = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        var data = res.products;
        setData(data);
        setorginalData(data);
        console.log(data);
      });
  };
  const handleInput = (p) => {
    setInput(p.target.value.toLowerCase());
    var updatedSearch = orginalData.filter((item) =>
      item.title.toLowerCase().includes(input)
    );
    console.log(updatedSearch);
    setData(updatedSearch);
  };
  return (
    <div>
      <input
        type="text"
        className="h-[40px] w-[60vw] ml-[210px] mb-6 mt-6 border-2 border-black p-2"
        placeholder="Search products"
        onChange={(p) => handleInput(p)}
      />
      <div className="w-[98.5vw] h-[100vh] flex  bg-slate-400 flex-wrap justify-between mx-2">
        {data.map((e, idx) => {
          return (
            <>
              <div>
                <div
                  className="h-[300px] w-[300px] mt-2 bg-teal-800 flex justify-center items-center flex-col my-6"
                  key={idx}
                >
                  <img
                    className="h-[60%] w-[100%] object-fill"
                    src={e.images[0]}
                  />
                  <h1 className="mt-8">{e.title}</h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
