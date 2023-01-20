import { useNavigate } from "react-router-dom";

const Recommend = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/addrecommend");
  };
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
    <div className="flex items-center justify-center py-5">
      <div className="ml-8">
        <div className="w-96 flex flex-wrap reletive mb-20">
          <div className="flex flex-col mt-20">
            <p className="text-[#000] text-2xl font-bold ">For You</p>
            <p className="text-[#333] text-normal font-normal mt-2 ">
              원하는 상대의 조건을 설정하고 추천받으세요.
            </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
