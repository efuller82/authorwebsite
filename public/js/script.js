$(document).ready(function() {
  //     var settings = {
  //         "async": true,
  //         "crossDomain": true,
  //         "url": "https://theysaidso.p.rapidapi.com/quote?query=software",
  //         "method": "GET",
  //         "headers": config
  //     }
  //     $.ajax(settings).done(function (response) {
  //         console.log(response);
  //         $('#qotd').append(response.contents.quote)
  //         $('#qotd-author').append(response.contents.author)
  //     });
});

// ! clicking button multiple times causes blogs to render multiple times on page; need to fix
// This button shows the blogs on bottom of author.html page
$('.get-blogs').click(function() {
  const settings = {
    async: true,
    url: '/blogs/all',
    method: 'GET',
  };
  $.ajax(settings).done(function(response) {
    // console.log(response);
    response.forEach(function(blog) {
      const blogDate = `<div>Date: ${blog.date}</div>`;
      const blogCategory = `<div>Category: ${blog.category}</div>`;
      const blogTitle = `<div>Title: ${blog.title}</div>`;
      const blogContent = `<div>Content: ${blog.content}</div>`;
      $(
        '<div class="results card">' +
          blogDate +
          '<button class="btn btn-danger btn-small delete-btn">' +
          'X' +
          '</button>' +
          blogCategory +
          blogTitle +
          blogContent +
          '</div>'
      ).appendTo('.blog-posts');
    });
  });
});

// delete blog function
function deleteBlogPost() {
  const id = $(this).data('id');
  $.ajax({
    method: 'DELETE',
    url: '/blogs/all/' + id,
  }).then(alert('function run'));
}

//! not working; on refresh i get the alert
// click event for deleting blog post
$('.blog-posts').on('click', '.delete-btn', function() {
  alert('you clicked');
  deleteBlogPost();
});
