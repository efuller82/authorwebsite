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
          blogCategory +
          blogTitle +
          blogContent +
          '</div>'
      ).appendTo('.blog-posts');
    });
  });
});
