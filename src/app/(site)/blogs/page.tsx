import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "OneSoft는 최신 기술을 활용한 맞춤형 웹사이트, 모바일 앱, 인공지능 솔루션을 개발합니다. 기획부터 디자인, 개발까지 최적의 솔루션을 제공합니다.",
  description: "OneSoft는 최신 기술을 활용한 맞춤형 웹사이트, 모바일 앱, 인공지능 솔루션을 개발합니다. 기획부터 디자인, 개발까지 최적의 솔루션을 제공합니다.",
};

const Blog = () => {
  const posts = [
    { title: "페이백 앱",
       coverImage: "/images/blog/blog-01.svg",
        excerpt: "소비자가 오프라인 매장에서 결제한 금액의 일부를 돌려받을 수 있는 페이백(캐시백) 서비스",
         date: "2025-07-30", 
         slug: "catchmong",
         },
         { title: "스마트 조명 제어 앱(카 앰비언트)",
          coverImage: "/images/blog/blog-02.svg",
           excerpt: "BLE 기반 스마트 조명 컨트롤 모바일 앱",
            date: "2025-06-01", 
            slug: "catchmong",
            },
            { title: "포토 부스 프로그램",
              coverImage: "/images/blog/blog-03.png",
               excerpt: "다국어 지원(한국어,일본어,베트남어 등등)이 가능한 키오스크 솔루션",
                date: "2025-02-28", 
                slug: "catchmong",
                },
                { title: "디지털 노마드 직업 추천 사이트",
                  coverImage: "/images/blog/blog-04.svg",
                   excerpt: "간단한 질문지를 통해 디지털 노마드 직업을 추천해주는 사이트(GPT 프롬프트 이용)",
                    date: "2025-02-28", 
                    slug: "catchmong",
                    },
                    { title: "경품추첨 사이트",
                      coverImage: "/images/blog/blog-05.svg",
                       excerpt: "룰렛을 돌려 경품을 추첨 할 수 있는 사이트",
                        date: "2025-02-28", 
                        slug: "catchmong",
                        },
                        { title: "병원 앱 관리자 사이트",
                          coverImage: "/images/blog/blog-06.svg",
                           excerpt: "병원의 이벤트,사용자,배너 등을 효과적으로 관리하는 사이트 입니다.",
                            date: "2025-02-28", 
                            slug: "catchmong",
                            },
                            { title: "보험DB사 관리자 사이트",
                              coverImage: "/images/blog/blog-07.svg",
                               excerpt: "기존에는 엑셀로만 관리하던 보험DB사의 데이터를 효과적으로 관리할 수 있는 사이트입니다.",
                                date: "2025-02-28", 
                                slug: "catchmong",
                                },
                                { title: "드론 위치&정보 모니터링 서비스",
                                  coverImage: "/images/blog/blog-08.svg",
                                   excerpt: "드론의 위치, 센서 정보 등을 실시간으로 모니터링 할 수 있는 서비스 입니다.",
                                    date: "2025-02-28", 
                                    slug: "catchmong",
                                    },
                                    { title: "해외구매대행 사이트",
                                      coverImage: "/images/blog/blog-09.svg",
                                       excerpt: "해외구매대행 사이트",
                                        date: "2025-02-28", 
                                        slug: "catchmong",
                                        },
                                  ]
  return (
    <>
      <Breadcrumb pageName="포트폴리오" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
