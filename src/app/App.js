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
    {/*<Route path="about" element={ <About/> } />
    <Route path="sign-up" element={ <SignUp /> } />
    <Route path="articles" element={ <Articles/> } />
    <Route path="articles/:title" element={ <Article/> } />
    <Route path="authors/:name" element={ <Author/> } />
    <Route path="categories" element={ <Categories/> }>
      <Route path=":name" element={ <Category/> } />
    </Route>
    <Route path="profile" element={ <Profile/> }>
      <Route path="edit" element={ <EditProfileForm/> } />
    </Route>*/}
  </Route>
)
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;