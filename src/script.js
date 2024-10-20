class Post {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init = () => {
    window.onload = this.apiPost();
  };

  apiPost = async () => {
    let urlPhoto =
      "https://pixabay.com/api/?key=46626548-a140d19c49424fd4cdde2d38a&image_type=photo&min_width=200";
    try {
      let responseImg = await fetch(urlPhoto);
      let images = await responseImg.json();
      this.displayPostText(images);
    } catch (error) {
      console.log(error);
    }
  };

  displayPostText = (image) => {
    Array.from(image.hits).forEach((element) => {
      console.log(element);
      this.container.innerHTML += `
        <div class=post>
          <div class=user-name>
            <img src="${element.userImageURL}" alt="${element.tags}">
            <h1>${element.user}</h1>
            <img src="/src/img/ui/dots.png" alt="dots">
          </div>
          <img src="${element.largeImageURL}" alt="${element.tags}">
          <div class="share-section">
            <img src="/src/img/ui/like.png" alt="like button">
            <img src="/src/img/ui/comment.png" alt="comment button">
            <img src="/src/img/ui/share.png" alt="share button">
            <img src="/src/img/ui/save.png" alt="save button">
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

let post = new Post(document.querySelector(".container"));
