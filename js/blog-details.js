import { blogData } from "../data.js";

// DOM elements
const blogsContinar = document.querySelector(".blogs");

// state
let visibleCount = 3;

/* ----------------------------------
 * Display Blogs
 * ---------------------------------- */
function displayBlog(blogs) {
    blogsContinar.innerHTML = "";

    blogData.slice(0, visibleCount).forEach(el => {
        const { date, time, title, dis, name, designation, image } = el;

        const template = `
      <div class="card">
        <a href="../pages/blog-details.html" class="card-body">
          <img src="${image}" alt="blog image" />
          <div class="card-content">
            <ul class="data-time">
              <li>
                <img src="../media/calander.svg" alt="calendar" /> ${date}
              </li>
              <li>
                <img src="../media/clock.svg" alt="clock" /> ${time}
              </li>
            </ul>

            <h3>${title}</h3>
            <p>${dis}</p>

            <hr />

            <div class="info">
              <div class="left">
                <h5>${name}</h5>
                <p>${designation}</p>
              </div>
              <div class="right">
                <img src="../media/arrow-blog.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </a>
      </div>
    `;

        blogsContinar.insertAdjacentHTML("beforeend", template);
    });
}


displayBlog()