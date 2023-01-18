// import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { PostDetail } from "./PostDetail";

async function fetchPosts() {
  const response = await fetch("http://localhost:3001/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

const Main = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [selectedPost, setSelectedPost] = useState(null);

  const { data, isError, error, isLoading } = useQuery(["posts"], fetchPosts);

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  return (
    <div className="flex items-center justify-center py-5">
      <div className="ml-8">
        <div className="mt-6 flex relative">
          <img
            src="./img/homelogo.png"
            alt="HomeLogo"
            className="w-24 h-8 ml-3"
          />
        </div>
        {data.map((post) => (
          <div className="w-96 flex flex-wrap reletive mb-20">
            <div
              className="w-[350px] h-[572px] mt-10 bg-cover bg-no-repeat relative mr-7 cursor-pointer hover:scale-110 duration-300 rounded-xl"
              style={{ backgroundImage: `url(${post.url}})` }}
            >
              <div className="flex text-[#fff] absolute bottom-48 left-5 space-x-[198px]">
                <div className="flex space-x-2">
                  <p className="text-2xl font-bold">{post.user}</p>
                  <p className="text-xl flex items-center justify-center">
                    {post.age}
                  </p>
                </div>
                <img
                  src="./img/detailicon.png"
                  alt="DetailIcon"
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
              <div className="flex text-[#fff] absolute bottom-40 left-5 space-x-2 text-sm">
                <p>{post.job}</p>
                <p className="mr-2 ml-2 ">.</p>
                <p>{post.home}</p>
              </div>
              <div className="flex text-[#fff] absolute bottom-28 left-5 space-x-2 text-xs flex-wrap">
                {post.stack.map((stack) => (
                  <p className=" bg-[#000]/[.3] px-3 py-2 rounded-full mt-2">
                    {stack.content}
                  </p>
                ))}
              </div>

              <div className="flex absolute bottom-6 right-4">
                <div className="bg-[#fff] w-14 h-14 rounded-full flex items-center">
                  <img
                    src="./img/hearticon1.png"
                    alt="HomeLogo"
                    className="w-8 h-7 ml-3"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
