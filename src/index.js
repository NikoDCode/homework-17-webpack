import '@css/style.css'
import Post from '@model/post'
import jsonData from '@assets/data'
import logo from '@assets/icon-square-big.png'
import $ from 'jquery'

const post = new Post('Webpack Post Title', logo)

// console.log('Post to string:', post.toString())
$('pre').text(post.toString())

console.log('Data:', jsonData)
// console.log('XML Data:', xmlData)
// console.log('CSV Data:', csvData)
