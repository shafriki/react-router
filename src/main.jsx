import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home';
import About from './components/About';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact';
import Users from './components/Users';
import Posts from './components/Posts';
import PostDetails from './PostDetails';
import Comments from './components/Comments';
import CommentDetails from './components/CommentDetails';
import Photos from './components/Photos';
import PhotoDetail from './components/PhotoDetail';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/users',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element: <Users></Users>
    },
    {
      path: '/posts',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      element: <Posts></Posts>
    },
    {
      path: '/post/:postId',
      loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element: <PostDetails></PostDetails>
    },
    {
      path: '/comments',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
      element: <Comments></Comments>
    },
    {
      path: '/comment/:commentID',
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentID}`),
      element: <CommentDetails></CommentDetails>
    },
    {
      path: '/photos',
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/photos'),
      element: <Photos></Photos>
    },
    {
      path: '/photo/:photoId',
      loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`),
      element: <PhotoDetail></PhotoDetail>
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
