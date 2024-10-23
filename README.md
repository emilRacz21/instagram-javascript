# Instagram-like Application

This project implements an Instagram-like application using JavaScript, HTML, and CSS. It fetches images from the Pixabay API and displays them in a visually appealing format, including a user interface for stories and posts.

## Features

- Infinite scrolling to load more posts
- Display user stories with profile pictures
- Show post details including images, likes, and comments
- Dynamic updating of the current time in the UI
- Smooth hide/show of the main menu on scroll

## Technologies Used

- HTML
- CSS
- JavaScript
- Pixabay API

## Getting Started

  To run this project locally, follow these steps:

1. **Clone the repository**:

       git clone https://github.com/emilRacz21/instagram-javascript.git
       cd instagram-javascript
   
2. **Open the index.html file in your web browser. This will display the application**

3. **Use your API Key:**

   ```javascript
   let urlPhoto = `https://pixabay.com/api/?key=YOUR_API_KEY&image_type=photo&orientation=horizontal&q=NATURE&page=${this.page}`;
   
4. Replace the API key in the apiPost method of the Instagram class with your own Pixabay API key for the application to fetch images.

## Code Overview

The main class Instagram is responsible for:

* Initializing the application
* Fetching data from the Pixabay API
* Managing user interface updates based on user interactions (scrolling)
* Displaying posts and stories dynamically

## Design

![instagram](https://github.com/user-attachments/assets/73aa5c6a-7da8-40b6-9794-a3609d7d4aa5)


## Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
