import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setNews(data);
      }, []);
  });
  return (
    <div className='App'>
      <div className='title'>
        <h1>Space News</h1>
      </div>
      <div className='newsContainer'>
        {news.map((val, key) => {
          return (
            <div
              key={key}
              className='article'
              onClick={() => {
                window.location.href = val.url;
              }}
            >
              <h3>{val.title}</h3>
              <img src={val.imageUrl} />
              <p>{val.summary}</p>
              <h5>{val.publishedAt}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
