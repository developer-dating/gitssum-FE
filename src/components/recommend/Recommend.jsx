import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchRecomend() {
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

const Recommend = () => {
  const navigate = useNavigate();

  const { data, isError, error, isLoading } = useQuery(
    ["recomend"],
    fetchRecomend
  );

  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <>
        <h3>Oops, something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    );

  const onClickHandler = () => {
    navigate("/addrecommend");
  };

  return (
    <>
      <div className="flex items-center justify-center py-5">
        <div className="ml-8">
          <div className="w-96 flex flex-wrap reletive mb-20">
            <div className="flex flex-col mt-20">
              <p className="text-[#000] text-2xl font-bold ">For You</p>
              <p className="text-[#333] text-normal font-normal mt-2 ">
                원하는 상대의 조건을 설정하고 추천받으세요.
              </p>
              {data.data.profileList.length === 0 ? (
                <>
                  <div className="w-[350px] h-[450px] flex items-center justify-center">
                    <img src="/img/signin_logo.png" alt="NotARecommendLogo" />
                  </div>
                  <div className="w-[350px] h-[100px] flex items-center justify-center">
                    <button
                      onClick={onClickHandler}
                      className="flex w-[200px] h-[48px] justify-center items-center rounded-md border border-[#28CC9E] text-[#28CC9E] font-bold hover:bg-[#28CC9E] hover:text-[#fff] duration-300"
                    >
                      <p>취향 설정하기</p>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[350px] h-[100px] flex pt-[28px]">
                    <button
                      onClick={onClickHandler}
                      className="flex w-[89px] h-[34px] justify-center items-center rounded-full px-[8px] py-[12px] border border-[#28CC9E] text-[#28CC9E] font-medium hover:bg-[#28CC9E] hover:text-[#fff] duration-300 text-[14px]"
                    >
                      <p>취향 재설정</p>
                    </button>
                  </div>
                  <div className="flex w-[400px] flex-wrap">
                    {data.data.profileList.map((post) => (
                      <div className="flex flex-col mb-[34px]">
                        <a href={`/userdetail/${post.userId}`}>
                          <div
                            className="w-[167px] h-[167px]  bg-center bg-cover bg-no-repeat relative mr-[16px] cursor-pointer  duration-300 rounded-xl"
                            style={{
                              backgroundImage: `url(${post.imageList[0]})`,
                            }}
                          ></div>
                        </a>
                        <div className="flex flex-row items-center">
                          <div className="text-[18px] font-bold mr-1">
                            {post.username}
                          </div>
                          <div className="text-[16px] font-medium">
                            {post.age}
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <img
                            src="/img/backicon.png"
                            alt="BackIcon"
                            className="w-[16px] h-[13px] mr-1"
                          />
                          <div>{post.job} 개발자</div>
                        </div>
                        <div className="flex flex-row items-center">
                          <img
                            src="/img/arrowicon.png"
                            alt="ArrowIcon"
                            className="w-[14px] h-[14px] mr-1"
                          />
                          <div>{post.residence}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommend;
