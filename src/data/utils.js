export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-UK', {
        timeZone: "GMT",
    })
}

// export function formatBlogPosts(posts, {
//     filterOutDrafts = true,
//     filterOutFuturePosts = true,
//     sortByDate = true,
//     limit = undefined,
// } = {}{
//     console.log(posts)
//     const filteredPosts = posts.reduce((acc, post) => {
//         const { date, draft } = post.frontmatter;
//         // filter out drafts if true
//         if(filterOutDrafts && draft) return acc; // will not include if draft

//         if(filterOutFuturePosts && new Date(date) > new Date
//         ()) return acc
        
//         acc.push(post) //add post to acc

//         return acc;

//     }, [])

// }