$(document).ready(function () {
  console.log("Document is ready");

  //------SideBar
  if (window.location.href.indexOf("index") > -1) {
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
    });
  }

  //-----Post
  if (window.location.href.indexOf("index") > -1) {
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
  }
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

  //--------Scrol go up
  $(".aGoUp").click(function (e) {
    e.preventDefault();
    $("html", "body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //-----Save login in Local Storage

  $("#divLogin form").submit(function () {
    let inputName = $("#inputName").val();
    localStorage.setItem("inputName", inputName);
  });

  let inputName = localStorage.getItem("inputName");

  if (inputName != null && inputName != "undefined") {
    let divAbout_p = $("#divAbout p");
    divAbout_p.html(`<strong> Welcome ${inputName} </strong>`);
    divAbout_p.append(`<a href='#' id='aLogOut'>Close session</a>`);
    $("#divLogin").hide();
  }

  $("#aLogOut").click(function () {
    localStorage.clear();
    location.reload();
  });

  if (window.location.href.indexOf("AboutUs") > -1) {
    $("#divAccodion").accordion();
  }

  if (window.location.href.indexOf("watch") > -1) {
    setInterval(function () {
      let divWatch = moment().format("h:mm:ss a");

      $("#divWatch").html(divWatch);
    }, 1000);
  }

    //------------Validation Contact Form
    if (window.location.href.indexOf("contact") > -1) {
      
      $("#formContact").validate({
        messages: {
          name: 'Please specify your name',
          surname: 'Please specify your surname',
          email: 'Please specify a valid email address',
          birthdate: 'Please specify a valid birthdate',
          years: 'Please specify your age',
        }
      });
      // $('#divContact form').submit(function(){
      //   location.reload();
      // })
    }
  

});
