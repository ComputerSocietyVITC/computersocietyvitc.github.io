import React, { useState, useEffect } from 'react'
import Mountains from "../components/Mountains";
import blog from "../images/blog.png";
import Loader from "../components/loader/Loader";

const Article = (props) => {
  const { author, date, title, url, img } = props;
  return (
    <a href={url} target="_blank">
      <div className="bg-white rounded-3xl ">
        <div className="rounded-t-3xl overflow-hidden"><img class="object-contain" src={img} alt={title} /></div>
        <div className="p-4 h-28">
          <p class="font-bold text-black">{title}</p>
          <p class="text-black">{author}</p>
          <p class="text-gray-500 text-xs">{date}</p>
        </div>
      </div>
    </a>
  )
};

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])
  useEffect(() => {
      document.getElementById("starrybg").style.background = "linear-gradient(180deg, rgba(23, 23, 23, 0) 6.68%, rgba(52, 80, 154, 0.29) 64.84%, rgba(151, 169, 204, 0.439818) 81.37%, rgba(255, 255, 255, 0.45) 98.87%)";
  },[])
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
  }, []);
  return (
    <div>
      {
        loading ? 
        (<Loader/>) :
        (<div className='relative z-10'>
          <div className="font-catamaran text-center mt-10 mb-2 lg:text-left lg:ml-28 text-black" id="outlinetext">
            <h1>OUR BLOGS</h1>
          </div>
          <div className="m-auto mb-12 lg:mb-16 flex">
            <div className="w-4/5 m-auto lg:mt-20 lg:ml-32 lg:w-3/5"><p className="text-center lg:text-left text-xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis alias nemo, corrupti recusandae pariatur dicta quam culpa ad, fugiat quisquam harum? Animi ex natus repellendus beatae totam. Placeat magnam delectus, iste architecto perspiciatis maiores iure totam tempore aperiam corrupti quos temporibus error expedita optio molestiae corporis possimus rem doloremque voluptatibus.</p></div>
            <div className="hidden lg:block m-auto -mt-32 -mr-10 content-center overflow-hidden"><img className="object-cover" src={blog} alt="" /></div>
          </div>
          <p className="font-bold font-sans text-3xl">Check Out Our Blogs</p>
          <div className="w-2/3 m-auto lg:w-full mt-16 lg:px-28 grid grid-cols-1 lg:grid-cols-3 grid-flow-cols gap-10 lg:gap-16">
            {
              articles.map((article) => (<Article author={article.author} date={article.publishedDate} title={article.title} url={article.url} img={article.imgSrc} />))
            }
          </div>
          <Mountains />
        </div>) 
      }
    </div>
  )
}

export default Blogs
