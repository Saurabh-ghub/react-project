import logo from './logo.svg';
import './App.css';
import Card from './Components/Card'

function App() {
    let cityName='NewYork'
    let image = {
      src : "https://images.freeimages.com/images/large-previews/bbb/autumn-in-new-york-5-1360120.jpg?fmt=webp&h=350",
      alt: "Autumn-newyork"
    }
    return ( <>
        <h1 className = 'text-3xl font-bold bg-green-500 p-30 rounded-md' >
        Hello World!
        </h1> 

        <Card name={cityName} image={image} des="This is NewYork Autumn Season."   / >

        </>
    );
}

export default App;