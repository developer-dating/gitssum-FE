import React from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router";
import { Toaster, toast } from "react-hot-toast";

async function fetchLikes() {
  try {
    const response = await axios.get(
      "http://3.39.175.168/api/user/get/all/profiles"
    );
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    return response;
  } catch (error) {
    console.log(error);
  }
}
const Chat = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [selectedPost, setSelectedPost] = useState(null);

  const { data, isError, error, isLoading } = useQuery(["likes"], fetchLikes);
  console.log(data);
  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );
  return (
    <div className="flex items-center justify-center">
      <div className=" shadow-xl">
        <div className="ml-[20px]">
          <div className="w-[372px] flex flex-wrap ">
            <div className="flex flex-col mt-[40px]">
              <div className="flex flex-row mb-[20px] ml-[20px]">
                <p className="text-[#000] text-2xl font-bold ">메세지</p>
              </div>
              {data.data.profileList.map((post, index) => (
                <div className="w-[370px] h-[130px] ml-[-10px] flex items-center hover:bg-slate-100 cursor-pointer">
                  <div className="flex flex-row ml-[20px]">
                    <div
                      style={{
                        backgroundImage: `url(${post.imageList[0]})`,
                      }}
                      className="w-[90px] h-[90px] rounded-full bg-cover"
                    />
                    <div className="flex flex-col ml-[15px] mb-[4px] justify-center">
                      <div className="flex flex-row">
                        <p className="mr-2 font-bold text-[20px]">
                          {post.username}
                        </p>
                      </div>
                      <p className="text-[14px]">
                        정말요? 아하하 좀 귀여우시네요^^
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
