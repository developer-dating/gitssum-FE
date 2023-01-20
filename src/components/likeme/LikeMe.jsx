import { useNavigate } from "react-router-dom";

const LikeMe = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [selectedPost, setSelectedPost] = useState(null);

  // const { data, isError, error, isLoading } = useQuery(["posts"], fetchPosts);

  // if (isLoading) return <h3>Loading...</h3>;
  // if (isError)
  //   return (
  //     <>
  //       <h3>Oops, something went wrong</h3>
  //       <p>{error.toString()}</p>
  //     </>
  // );

  return (
    <div className="flex items-center justify-center">
      <div className="ml-8">
        <div className="w-96 flex flex-wrap ">
          <div className="flex flex-col mt-[86px]">
            <div className="flex flex-row mb-[40px] ">
              <img
                src="/img/likelogo.png"
                alt="likelogo"
                className="w-[32px] h-[30px] mr-2"
              />
              <p className="text-[#000] text-2xl font-bold ">받은 좋아요</p>
            </div>
            <div className="w-[390px] h-[130px] ml-[-15px] border-b-[2px] flex items-center ">
              <div className="flex flex-row ml-[10px]">
                <img
                  src="/img/person1.png"
                  alt="person1"
                  className="w-[90px] h-[90px] rounded-[10px]"
                />
                <div className="flex flex-col ml-2 mb-[4px]">
                  <div className="flex flex-row">
                    <p className="mr-2 font-bold text-[20px]">정규민</p>
                    <span className="font-normal text-[18px] mr-2">29</span>
                  </div>

                  <p className="text-[14px]">
                    프리랜서 개발자 . 서울특별시 강서구
                  </p>
                  <div className="flex flex-row mt-[5px]">
                    <button className="w-[90px] h-[32px] bg-[#28CC9E] text-[#fff] rounded-[8px] mr-[8px] hover:bg-[#fff] border hover:border-[#28CC9E] hover:text-[#28CC9E] duration-300">
                      <p>연결하기</p>
                    </button>
                    <button className="w-[90px] h-[32px] rounded-[8px] border border-gray text-[#000] hover:bg-[grey] hover:text-[#fff] duration-300">
                      <p>관심 없음</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[390px] h-[130px] border-b-[2px] ml-[-15px] flex items-center">
              <div className="flex flex-row ml-[10px]">
                <img
                  src="/img/person1.png"
                  alt="person1"
                  className="w-[90px] h-[90px] rounded-[10px]"
                />
                <div className="flex flex-col ml-2 mb-[4px]">
                  <div className="flex flex-row">
                    <p className="mr-2 font-bold text-[20px]">정규민</p>
                    <span className="font-normal text-[18px] mr-2">29</span>
                  </div>
                  <p className="text-[14px]">
                    프리랜서 개발자 . 서울특별시 강서구
                  </p>
                  <div className="flex flex-row mt-[5px]">
                    <button className="w-[90px] h-[32px] bg-[#28CC9E] text-[#fff] rounded-[8px] mr-[8px] hover:bg-[#fff] border hover:border-[#28CC9E] hover:text-[#28CC9E] duration-300">
                      <p>연결하기</p>
                    </button>
                    <button className="w-[90px] h-[32px] rounded-[8px] border border-gray text-[#000] hover:bg-[grey] hover:text-[#fff] duration-300">
                      <p>관심 없음</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[390px] h-[130px] border-b-[2px] ml-[-15px] flex items-center">
              <div className="flex flex-row ml-[10px]">
                <img
                  src="/img/person1.png"
                  alt="person1"
                  className="w-[90px] h-[90px] rounded-[10px]"
                />
                <div className="flex flex-col ml-2 mb-[4px]">
                  <div className="flex flex-row">
                    <p className="mr-2 font-bold text-[20px]">정규민</p>
                    <span className="font-normal text-[18px] mr-2">29</span>
                  </div>

                  <p className="text-[14px]">
                    프리랜서 개발자 . 서울특별시 강서구
                  </p>
                  <div className="flex flex-row mt-[5px]">
                    <button className="w-[90px] h-[32px] bg-[#28CC9E] text-[#fff] rounded-[8px] mr-[8px] hover:bg-[#fff] border hover:border-[#28CC9E] hover:text-[#28CC9E] duration-300">
                      <p>연결하기</p>
                    </button>
                    <button className="w-[90px] h-[32px] rounded-[8px] border border-gray text-[#000] hover:bg-[grey] hover:text-[#fff] duration-300">
                      <p>관심 없음</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[390px] h-[130px] border-b-[2px] ml-[-15px] flex items-center">
              <div className="flex flex-row ml-[10px]">
                <img
                  src="/img/person1.png"
                  alt="person1"
                  className="w-[90px] h-[90px] rounded-[10px]"
                />
                <div className="flex flex-col ml-2 mb-[4px]">
                  <div className="flex flex-row">
                    <p className="mr-2 font-bold text-[20px]">정규민</p>
                    <span className="font-normal text-[18px] mr-2">29</span>
                  </div>

                  <p className="text-[14px]">
                    프리랜서 개발자 . 서울특별시 강서구
                  </p>
                  <div className="flex flex-row mt-[5px]">
                    <button className="w-[90px] h-[32px] bg-[#28CC9E] text-[#fff] rounded-[8px] mr-[8px] hover:bg-[#fff] border hover:border-[#28CC9E] hover:text-[#28CC9E] duration-300">
                      <p>연결하기</p>
                    </button>
                    <button className="w-[90px] h-[32px] rounded-[8px] border border-gray text-[#000] hover:bg-[grey] hover:text-[#fff] duration-300">
                      <p>관심 없음</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeMe;
