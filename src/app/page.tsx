import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Next.js - SaaS Starter Kit and Boilerplate for Next.js",
  description: "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
};

export default function Home() {
  // const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
  const posts = [
    { title: "페이백 앱",
       coverImage: "/images/blog/blog-01.svg",
        excerpt: "소비자가 오프라인 매장에서 결제한 금액의 일부를 돌려받을 수 있는 페이백(캐시백) 서비스",
         date: "2025-03-30", 
         slug: "catchmong",
         },
         { title: "스마트 조명 제어 앱(카 앰비언트)",
          coverImage: "/images/blog/blog-02.svg",
           excerpt: "BLE 기반 스마트 조명 컨트롤 모바일 앱",
            date: "2025-03-30", 
            slug: "catchmong",
            },
            { title: "포토 부스 프로그램",
              coverImage: "/images/blog/blog-03.png",
               excerpt: "다국어 지원(한국어,일본어,베트남어 등등)이 가능한 키오스크 솔루션",
                date: "2025-02-02", 
                slug: "catchmong",
                },
                { title: "디지털 노마드 직업 추천 사이트",
                  coverImage: "/images/blog/blog-04.svg",
                   excerpt: "간단한 질문지를 통해 디지털 노마드 직업을 추천해주는 사이트(GPT 프롬프트 이용)",
                    date: "2025-02-02", 
                    slug: "catchmong",
                    },
                    { title: "경품추첨 사이트",
                      coverImage: "/images/blog/blog-05.svg",
                       excerpt: "룰렛을 돌려 경품을 추첨 할 수 있는 사이트",
                        date: "2025-02-02", 
                        slug: "catchmong",
                        },
                        { title: "병원 앱 관리자 사이트",
                          coverImage: "/images/blog/blog-06.svg",
                           excerpt: "병원의 이벤트,사용자,배너 등을 효과적으로 관리하는 사이트 입니다.",
                            date: "2025-02-02", 
                            slug: "catchmong",
                            },
                            { title: "보험DB사 관리자 사이트",
                              coverImage: "/images/blog/blog-07.svg",
                               excerpt: "기존에는 엑셀로만 관리하던 보험DB사의 데이터를 효과적으로 관리할 수 있는 사이트입니다.",
                                date: "2025-02-02", 
                                slug: "catchmong",
                                },
                                { title: "드론 위치&정보 모니터링 서비스",
                                  coverImage: "/images/blog/blog-08.svg",
                                   excerpt: "드론의 위치, 센서 정보 등을 실시간으로 모니터링 할 수 있는 서비스 입니다.",
                                    date: "2025-02-02", 
                                    slug: "catchmong",
                                    },
                                    { title: "해외구매대행 사이트",
                                      coverImage: "/images/blog/blog-09.svg",
                                       excerpt: "해외구매대행 사이트",
                                        date: "2025-02-02", 
                                        slug: "catchmong",
                                        },
                                  ]
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <HomeBlogSection posts={posts} />
      <Faq />
      {/* <Team /> */}

      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
