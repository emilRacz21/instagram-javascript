//New class...
class Instagram {
  // Constructor to initialize the Post object with container and stories elements
  constructor(container, stories) {
    this.container = container;
    this.stories = stories;
    this.init();
    this.page = 1;
    this.loading = false;
    this.position = 0;
  }

  // Initialize the Post by setting up event listeners and fetching initial data
  init = () => {
    this.scrollAndReset();
    this.apiPost();
  };

  // Update the current time displayed in the UI
  data = () => {
    let now = new Date();
    // Format minutes and hours to be two digits
    let minutes =
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    document
      .getElementsByClassName("time")
      .item(0).innerHTML = `${hours}:${minutes}`;
  };

  // Fetch posts from the Pixabay API
  apiPost = async () => {
    if (this.loading) return;
    this.loading = true;
    let urlPhoto = `https://pixabay.com/api/?key=46626548-a140d19c49424fd4cdde2d38a&image_type=photo&orientation=horizontal&q=NATURE&page=${this.page}`;
    try {
      // Fetch the images from the API
      let responseImg = await fetch(urlPhoto);
      let images = await responseImg.json();
      this.scrollStories(images);
      this.displayPostText(images);
      this.page += 1;
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  };

  // Populate the stories section with images from the fetched data
  scrollStories = (stories) => {
    Array.from(stories.hits).forEach((element) => {
      this.stories.innerHTML += `
      <div class="stories">
        <img src="${this.checkPhoto(element.userImageURL)}" alt="User ${
        element.user
      }" />
         <p>${element.user}</p>
      </div>
      `;
    });
  };

  // Set up scroll event listener and update UI based on scroll position
  scrollAndReset = () => {
    this.container.addEventListener("scroll", () => {
      this.hideMenuBar();
      this.data();
      if (
        this.container.scrollTop + this.container.clientHeight >=
        this.container.scrollHeight - 3
      ) {
        this.apiPost();
      }
    });
  };

  // Check if the user's photo exists; if not, return a default image
  checkPhoto = (photo) => {
    if (photo == "") {
      return "/src/img/user.png";
    } else {
      return photo;
    }
  };

  // Hide or show the menu bar based on scroll direction
  hideMenuBar = () => {
    let menu = document.getElementsByClassName("main-menu-section")[0];
    if (this.position < this.container.scrollTop) {
      menu.style.opacity = 0;
      menu.style.transform = "translateY(-100%)";
      menu.style.borderTopLeftRadius = "50px";
      menu.style.borderTopRightRadius = "50px";
    } else {
      menu.style.opacity = 1;
      menu.style.transform = "translateY(0%)";
      menu.style.borderTopLeftRadius = "0px";
      menu.style.borderTopRightRadius = "0px";
    }
    this.position = this.container.scrollTop;
  };

  // Display posts in the main content area
  displayPostText = (image) => {
    Array.from(image.hits).forEach((element) => {
      this.container.innerHTML += `
        <div class=post>
          <div class=user-name>
            <img src="${this.checkPhoto(element.userImageURL)}" alt="User ${
        element.user
      }">
            <h1>${element.user}</h1>
            <img src="/src/img/ui/dots.png" alt="dots">
          </div>
          <img src="${element.largeImageURL}" alt="${element.tags}">
          <div class="share-section">
            <img class="img-react" src="/src/img/ui/like.png" alt="like button">
            <img class="img-react" src="/src/img/ui/comment.png" alt="comment button">
            <img class="img-react" src="/src/img/ui/share.png" alt="share button">
            <img class="img-react" src="/src/img/ui/save.png" alt="save button">
          </div>
          <div class="like-section">
            <p>${element.likes}</p>
            <p>Likes</p>
          </div>
          <div class="description-section">
            <p>${element.user}</p>
            <p>${element.tags}</p>
          </div>
          <p class="comments">View all ${element.comments} comments</p>
        </div>
        `;
    });
  };
}

// Instantiate the Post class with the container and stories elements
let instagram = new Instagram(
  document.querySelector(".container"),
  document.querySelector(".scroll-stories-x")
);
