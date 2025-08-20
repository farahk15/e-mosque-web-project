import {useState , useEffect} from "react";

const useInterval = (callback, seconds = 1) => {
  const [counter , setCounter ] = useState(0)
  const [stop, setStop] = useState(false);
  const [counter5,setCounter5]= useState(0)
  const [counter180,setCounter180]= useState(0)

  useEffect(() => {
    let interval = null;

    if (!stop) {
      interval = setInterval(()=>{
        callback();
        setCounter( (prev)=> prev + 1)
        if(counter % 5 === 0)
        {
       
          setCounter5(counter)
        }
        if (counter % 180 ===0)
        {
          setCounter180(counter)
          
        }
      }, seconds * 1000);
    }

    return () => clearInterval(interval);
  }, [callback, seconds, stop]);

  return { counter , counter5 , counter180 , setStop };
};

export default useInterval;