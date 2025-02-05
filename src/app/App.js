import './App.css';
import Root from '../root/Root';
import Subreddit from '../components/subreddit/subreddit';
import Post from '../components/post/post';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const router =  createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route index element={ <Subreddit /> } />
    <Route path='r/:subreddit' element={ <Subreddit />} >
      <Route path='r/:subreddit/:post' element={ <Post /> } />
    </Route>
  </Route>
)
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;