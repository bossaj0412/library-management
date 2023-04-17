import './App.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import Header from './Components/Header';
import Result from './Components/Result';
// import Crad from './Components/Crad';


function App() {
  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(false)
  const [Error, setError] = useState("")

  const fetchDetails= async ()=>{

    try{
           setLoading(true);
           const {data}= await axios.get('https://openlibrary.org/search.json?author=tolkien&sort=new');
          
           setData(data.docs);
           setLoading(false);
    }
    catch(e){
            setLoading(false);
            setError(e);
    }

  }

  useEffect(() => {
   
    fetchDetails();
  }, [])

  let x=Data;
  const [SearchResult, setSearchResult] = useState([]);
  const [Search, setSearch] = useState("")
  // setSearchResult(Data);
  const fun=(e)=>{

    setSearch(e);
    if(Search!==""){

      const newBooksList = Data.filter((i) => {
				return Object.values(i)
					.join(" ")
					.toLowerCase()
					.includes(Search.toLowerCase());
			});
      setSearchResult(newBooksList);
    }
    else setSearchResult(Data);

    }


 console.log(SearchResult);


    // console.log(Data);
    if(Loading){
        return  <h1 className='font-bold text-center'> Loading... </h1>

         
    }
    if(Error)
      return ( <h1>{ Error }</h1> )

    if(Data){
         return (
           <div>
               <Header  temp={fun} />
              {
                (Search.length  <1) ?
               <Result Details={x} />:

              <Result Details={SearchResult} />
              }
           </div>
           );
         }
}

export default App;
