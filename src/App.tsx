import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {useSetRecoilState} from "recoil"
import {useEffect} from "react"

import Home from "./Pages/Home"; 
// import ErrorBoundary from "./components/ErrorBoundary";
import { NoteState } from "./state/atom/NoteState";



function App() {
  const setNote = useSetRecoilState(NoteState)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement:<ErrorBoundary />
      
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  
  useEffect(()=>{
    setNote(JSON.parse(localStorage.getItem("noteList") || '{}')
    ? JSON.parse(localStorage.getItem("noteList") || '{}')
    : [])
  },[])


  
    return (
      
        <RouterProvider router={router} />
  )
}

export default App
