import React, { useState, useEffect } from 'react'
import Mountains from "../components/Mountains";
import blog from "../images/blog.png";
import axios from "axios";

const Article = (props) => {
  const { author, date, title, url, img } = props;
  return (
    <a href={url}>
      <div className="bg-white rounded-3xl row-span-1 w-45">
        <div className="rounded-t-3xl w-45 h-25 overflow-hidden"><img class="object-contain" src={img} alt="" /></div>
        <div className="w-45 p-4">
          <p class="font-bold text-black">{title}</p>
          <p class="text-black">{author}</p>
          <p class="text-gray-500 text-xs">{date}</p>
        </div>
      </div>
    </a>
  )
};
async function test() {
  try {
    const { data } = await axios.get('https://dev.to/api/articles?username=ieeecsvitc')
    console.log(data.response)
  } catch (error) {
    console.log(error.response.data)
  }
}
const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const fetchArticles = (username) => {
    let url = "https://dev.to/api/articles/latest?username=" + username;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const articleData = result.map((item) => {
          return {
            id: item.id,
            author: item.user.name,
            url: item.url,
            imgSrc: item.social_image,
            title: item.title,
            publishedDate: item.readable_publish_date
          };
        });
        setArticles(articleData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchArticles("ieeecsvitc");
    test();
  }, []);
  return (
    <div className='relative z-10'>
      <div className="font-catamaran text-center lg:text-left my-5 lg:ml-28 text-black" id="outlinetext">
        <h1>OUR BLOGS</h1>
      </div>
      <div className="m-auto mb-24 flex">
        <div className="w-4/5 m-auto lg:mt-20 lg:ml-32 lg:w-3/5"><p className="text-center lg:text-left text-xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis alias nemo, corrupti recusandae pariatur dicta quam culpa ad, fugiat quisquam harum? Animi ex natus repellendus beatae totam. Placeat magnam delectus, iste architecto perspiciatis maiores iure totam tempore aperiam corrupti quos temporibus error expedita optio molestiae corporis possimus rem doloremque voluptatibus.</p></div>
        <div className="hidden lg:block m-auto -mt-32 -mr-10 content-center overflow-hidden"><img className="object-cover" src={blog} alt="Blog Image" /></div>
      </div>
      <p className="font-bold text-3xl">Check out our Blogs</p>
      <div className="w-3/5 m-auto mt-10 grid grid-cols-1 lg:grid-cols-3 grid-flow-cols lg: gap-6">
        {
          articles.map((article) => (<Article author={article.author} date={article.publishedDate} title={article.title} url={article.url} img={article.imgSrc} />))
        }
      </div>
      <Mountains />
    </div>
  )
}

export default Blogs
