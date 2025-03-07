import './App.css';
import Root from '../components/root/Root';
import Subreddit from '../components/subreddit/subreddit';
import Post from '../components/post/post';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import IndexSubreddit from '../components/indexSubreddit/indexSubreddit';

const router =  createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route index element={ <IndexSubreddit /> } />
    <Route path='r/:subreddit' element={ <Subreddit />} />
    <Route path='r/:subreddit/:post' element={ <Post /> } />
  </Route>
)
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;