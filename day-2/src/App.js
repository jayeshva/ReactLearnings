import './App.css';
import data from './components/data'
import PostCard from './components/PostCard';

function App() { 
  console.log(data)
  return (
    <div className="App" >
      <h1>
        Total Posts : {data.total}
      </h1>
      {data.posts.map((data)=>{
      return <PostCard data={data}/>
      })}
    </div>
  ); 
}

export default App;
