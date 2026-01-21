import { blogData, caragorys } from "../data.js";

// DOM elements
const caragorysData = document.querySelector("ul.catagory");
const blogsContinar = document.querySelector(".blogs");
const loadMore = document.querySelector("#load-more");

// state
let currentCategory = "all";
let visibleCount = 6;

/* ----------------------------------
 * Render Categories
 * ---------------------------------- */

// add "All" first
caragorysData.innerHTML = `<li class="active" data-id="all">All</li>`;

// add dynamic categories
caragorys.forEach(({ name }) => {
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  caragorysData.innerHTML += `<li data-id="${slug}">${name}</li>`;
});

/* ----------------------------------
 * Event: Category Click
 * ---------------------------------- */

caragorysData.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    // active class
    caragorysData.querySelectorAll("li").forEach(item =>
      item.classList.remove("active")
    );
    li.classList.add("active");

    currentCategory = li.dataset.id;
    visibleCount = 6;

    applyFilter();
  });
});

/* ----------------------------------
 * Display Blogs
 * ---------------------------------- */

function displayBlog(blogs) {
  blogsContinar.innerHTML = "";

  blogs.forEach(el => {
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

/* ----------------------------------
 * Filter + Load Logic
 * ---------------------------------- */

function applyFilter() {
  let filteredBlogs;

  if (currentCategory === "all") {
    filteredBlogs = blogData;
  } else {
    const categoryName = currentCategory
      .replace(/-/g, " ")
      .replace(/\b\w/g, char => char.toUpperCase());

    filteredBlogs = blogData.filter(
      blog => blog.catagory === categoryName
    );
  }

  displayBlog(filteredBlogs.slice(0, visibleCount));

  // Load More visibility
  loadMore.style.display =
    visibleCount >= filteredBlogs.length ? "none" : "inline-block";
}

/* ----------------------------------
 * Load More Button
 * ---------------------------------- */

loadMore.addEventListener("click", () => {
  visibleCount += 6;
  applyFilter();
});

/* ----------------------------------
 * Initial Load
 * ---------------------------------- */

applyFilter();
