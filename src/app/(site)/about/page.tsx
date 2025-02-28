import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "OneSoft는 최신 기술을 활용한 맞춤형 웹사이트, 모바일 앱, 인공지능 솔루션을 개발합니다. 기획부터 디자인, 개발까지 최적의 솔루션을 제공합니다.",
  description: "OneSoft는 최신 기술을 활용한 맞춤형 웹사이트, 모바일 앱, 인공지능 솔루션을 개발합니다. 기획부터 디자인, 개발까지 최적의 솔루션을 제공합니다.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="회사 소개" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
