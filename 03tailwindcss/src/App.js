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
        <div class="p-1 flex flex-wrap items-center justify-center">

        <Card name={cityName} image={image} des="This is NewYork Autumn Season."   / >
        <Card name={cityName} image={image} des="This is NewYork Autumn Season."   / >
        <Card name={cityName} image={image} des="This is NewYork Autumn Season."   / >
    
    </div>

        </>
    );
}

export default App;