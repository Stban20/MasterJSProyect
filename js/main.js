$(document).ready(function () {
  console.log("Document is ready");

  //------SideBar
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1200,
  });

  //-----Post

  let posts = [
    {
      title: "Title 1",
      date: `Publish on: ${moment().format("LLL")}`,
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
      pariatur blanditiis sint! Et amet optio excepturi fugit blanditiis
      alias facilis, distinctio vero ex rerum quae nihil quos facere
      aliquam commodi`,
    },
    {
      title: "Title 2",
      date: `Publish on: ${moment().format("LLL")}`,
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
    pariatur blanditiis sint! Et amet optio excepturi fugit blanditiis
    alias facilis, distinctio vero ex rerum quae nihil quos facere
    aliquam commodi`,
    },
    {
      title: "Title 3",
      date: `Publish on: ${moment().format("LLL")}`,
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
      pariatur blanditiis sint! Et amet optio excepturi fugit blanditiis
      alias facilis, distinctio vero ex rerum quae nihil quos facere
      aliquam commodi`,
    },
    {
      title: "Title 4",
      date: `Publish on: ${moment().format("LLL")}`,
      content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
      pariatur blanditiis sint! Et amet optio excepturi fugit blanditiis
      alias facilis, distinctio vero ex rerum quae nihil quos facere
      aliquam commodi`,
    },
  ];

  posts.forEach((elelment, index) => {
    let post = `
        <article class="articlePost">
          <h2>${elelment.title}</h2>
            <span class="spanDate">${elelment.date}</span>
              <p>
              ${elelment.content}
              </p>
            <a href="#" class="aButtonReadMore">Read More</a>
      </article>   
    `;
    $("#divPosts").append(post);
  });

  //----Theme Selector
  let cssTheme = $("#cssTheme");
  $("#divToGreen").click(function () {
    cssTheme.attr("href", "css/green.css");
  });

  $("#divToRed").click(function () {
    cssTheme.attr("href", "css/red.css");
  });

  $("#divToBlue").click(function () {
    cssTheme.attr("href", "css/blue.css");
  });
});
