import genres_img_1 from "../img/generes_1.png";
import genres_img_2 from "../img/generes_2.png";
import genres_img_3 from "../img/generes_3.png";
import genres_img_4 from "../img/generes_4.png";
import genres_img_5 from "../img/generes_5.png";
import genres_img_6 from "../img/generes_6.png";
import genres_img_7 from "../img/generes_7.jpg";
import genres_img_8 from "../img/generes_8.jpg";


export const info = {
  header: {
    links: [
      {
        url: "/",
        name: "Home",
        classNameLink: "header__link ",
        classNameItem: "header__item"
      },
       {
        url: "/search/books",
        name: "books",
        classNameLink: "header__link",
        classNameItem: "header__item"
      }, 
      {
        url: "https://github.com/natalyasafarevich/bookstore",
        name: "About the project",
        classNameLink: "header__link header__link_active",
        classNameItem: "header__item"
      },
    ]
  },
  main_page: {
    label_arrivals: {
      label: "Read new",
      title: "New Arrivals",
      desc: `Reading helps you developing your
		communication skills`
    },

    label_language: {
      label: "language",
      title: "Books in French",
      desc: `Read books in other languages`
    }
  },
  genres: {
    label_info: {
      label: "Collections",
      title: "Genres",
      desc: `Reading books keeps you relax and helps reduce stress`
    },
    items: [
      {
        title: "psychology",
        image_url: genres_img_1
      },
      {
        title: "Biography",
        image_url: genres_img_3
      },
      {
        title: "Fantasy",
        image_url: genres_img_2
      },
      {
        title: "Detectives",
        image_url: genres_img_6
      }, {
        title: "Gardening",
        image_url: genres_img_4
      }, {
        title: "Finance",
        image_url: genres_img_7
      }, {
        title: "History",
        image_url: genres_img_8
      }, {
        title: "Horror",
        image_url: genres_img_5
      },
    ]
  }
}
