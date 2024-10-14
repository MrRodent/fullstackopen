const blog = require("../models/blog");

const dummy = (blogs) => {
  return 1
}
const totalLikes = (blogs) => {
  return blogs.reduce((likes, listing) => likes + listing.likes, 0);
}

// NOTE: Alempana reduce-versio tästä
//
// const favouriteBlog = (blogs) => {
//   let mostLikes = 0
//   let favourite = {}

//   blogs.forEach(listing => {
//     if (listing.likes > mostLikes) {
//       mostLikes = listing.likes
//       favourite = listing
//     }
//   });

//   return favourite
// }

const favouriteBlog = (blogs) => {
  return blogs.reduce((favourite, listing) => 
    listing.likes > favourite.likes ? listing : favourite, 
    blogs[0]
  );
}


const mostBlogs = (blogs) => {
  const authorCounts = blogs.reduce((counts, { author }) => {
    counts[author] = (counts[author] || 0) + 1
    return counts
  }, {})

  const authorWithMostBlogs = Object.entries(authorCounts).reduce(
    (biggest, current) =>
      current[1] > biggest[1] ? current : biggest,
    ["", 0]
  )

  return { author: authorWithMostBlogs[0], blogs: authorWithMostBlogs[1] }
}

const mostLikes = (blogs) => {
  const authorList = blogs.reduce((list, { author, likes: likeCount }) => {
    const found = list.find(({ author: foundAuthor }) => foundAuthor === author)
    if (!found) {
      list.push({ author, likes: likeCount })
    } else {
      found.likes += likeCount
    }
    return list
  }, [])

  const authorWithMostLikes = authorList.reduce(
    (biggest, current) => (current.likes > biggest.likes ? current : biggest),
    { likes: 0 }
  )

  return authorWithMostLikes
}
module.exports = {
  dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes
}