import '../../css/posts.css'
import '../../css/postsScss.scss'
import Heading from '../../assets/images/heading.jpg'
import $ from 'jquery'

async function getPosts () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return data
}

const PostItem = (post) => {
  return `<div class="post">
    <div class="row"><div>id: </div><div>${post.id}</div></div>
    <div class="row"><div>title: </div><div>${post.title}</div></div>
    <div class="row"><div>body: </div><div>${post.body}</div></div>
    <div class="row"><div>userId: </div><div>${post.userId}</div></div>
    </div>`
}

$(() => {
  $('.flex-container').append(`<img src="${Heading}" width="500" height="300"></img>`)

  getPosts().then(posts => {
    console.log(posts)
    const postItems = posts.map(post => PostItem(post))
    $('.flex-container').append(postItems)
  })
})
