import { Blog } from "@/types/blog";
import { format, isBefore, isToday } from "date-fns";
import Image from "next/image";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, coverImage, excerpt, date } = blog;
  
  const formattedDate = new Date(date);
  const currentDate = new Date();

  // 날짜에 따른 배경색 설정
  let bgColor = "bg-green-500"; // 기본값: 진행 중 (초록색)
  if (isBefore(formattedDate, currentDate) && !isToday(formattedDate)) {
    bgColor = "bg-red-500"; // 과거 날짜 (빨강색)
  }


  return (
    <div className="wow fadeInUp group mb-10" data-wow-delay=".1s">
      <div className="mb-8 overflow-hidden rounded">
        <Image
          src={coverImage!}
          alt="image"
          className="w-full min-h-[320px] object-cover transition group-hover:rotate-6 group-hover:scale-125"
          width={408}
          height={272}
        />
      </div>
      <div>
        {/* 날짜 배경색 적용 */}
        <span className={`mb-5 inline-block rounded ${bgColor} px-4 py-1 text-center text-xs font-semibold leading-loose text-white`}>
        {(isBefore(formattedDate, currentDate) && !isToday(formattedDate))?"완료":"진행중"}
        </span>
        <h3>
          <span className="mb-4 inline-block text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
          </span>
        </h3>
        <p className="text-base text-body-color dark:text-dark-6">{excerpt}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
