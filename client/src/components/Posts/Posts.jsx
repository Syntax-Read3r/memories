import React from 'react'
import Post from './Post/Post'

// import styles
import useStyles from "./styles";

function Posts() {
    const classes = useStyles();

  return (
    <>
    <h1>Posts</h1>
    <Post />
    <Post />
    </>
  )
}

export default Posts