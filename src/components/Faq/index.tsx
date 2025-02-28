import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="자주 묻는 질문"
          paragraph="자주 묻는 질문을 통해 궁금증을 해결하세요. 더 궁금한 점이 있다면 문의해주세요!"
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="원소프트는 어떤 서비스를 제공하나요?"
              answer="💬 원소프트는 맞춤형 웹 및 앱 개발을 전문으로 합니다.
💬 React, Next.js, Flutter 등 최신 기술을 활용하여 개발합니다.
💬 스타트업부터 기업까지 다양한 프로젝트를 성공적으로 수행했습니다."
            />
            <SingleFaq
              question="프로젝트 개발 기간은 얼마나 걸리나요?"
              answer="💬 프로젝트의 규모와 복잡도에 따라 기간이 달라집니다.
💬 일반적으로 4~8주 정도 소요되며, 빠른 개발도 가능합니다.
💬 상세한 일정은 상담 후 정확히 안내해드립니다."
            />
            <SingleFaq
              question="개발 비용은 어떻게 책정되나요?"
              answer="💬 기능, 디자인, 개발 범위에 따라 비용이 달라집니다.
💬 견적 요청 시 상세한 개발 요구사항을 알려주시면 정확히 산출해드립니다.
💬 예산에 맞는 최적의 솔루션을 제공해 드릴 수 있습니다."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="유지보수 및 업데이트도 지원하나요?"
              answer="💬 서비스 운영을 위한 유지보수 및 기능 업데이트를 지원합니다.
💬 단기 유지보수부터 장기 계약까지 선택할 수 있습니다.
💬 추가 기능 개발도 가능하며, 별도 협의를 통해 진행됩니다."
            />
            <SingleFaq
              question="어떤 기술 스택을 사용하나요?"
              answer="💬 React, Next.js, Flutter 등을 사용합니다.
💬 백엔드는 Node.js, Express, Nest.js 등의 기술을 활용합니다.
💬 클라이언트 요구사항에 맞춰 다양한 기술을 적용할 수 있습니다."
            />
            <SingleFaq
              question="프로젝트 진행 방식은 어떻게 되나요?"
              answer="💬 기획 > 디자인 > 개발 > 테스트 > 배포 순으로 진행됩니다.
💬 진행 단계별로 클라이언트와 적극 소통하며 피드백을 반영합니다.
💬 원활한 협업을 위해 Bitbucket, Slack 등의 협업 툴을 활용합니다."
            />
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.6673"
              cy="132"
              r="1.66667"
              transform="rotate(180 45.6673 132)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 45.6673 117.333)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 45.6673 102.667)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 45.6673 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 45.6673 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 45.6673 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 45.6673 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 45.6673 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 45.6673 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 45.6673 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.0013 132)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.0013 117.333)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.0013 102.667)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 31.0013 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 31.0013 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 31.0013 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 31.0013 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 31.0013 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 31.0013 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 31.0013 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 16.3333 132)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 16.3333 117.333)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 16.3333 102.667)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 16.3333 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 16.3333 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 16.3333 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 16.3333 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 16.3333 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 16.3333 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 16.3333 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="132"
              r="1.66667"
              transform="rotate(180 1.66732 132)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 1.66732 117.333)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 1.66732 102.667)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 1.66732 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 1.66732 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 1.66732 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 1.66732 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 1.66732 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 1.66732 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 1.66732 1.66683)"
              fill="#13C296"
            />
          </svg>
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.6673"
              cy="132"
              r="1.66667"
              transform="rotate(180 45.6673 132)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 45.6673 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 45.6673 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 45.6673 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 45.6673 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 45.6673 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 45.6673 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 45.6673 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 45.6673 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 45.6673 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.0006 132)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.0006 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.0006 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 31.0006 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 31.0008 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 31.0008 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 31.0008 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 31.0008 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 31.0008 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 31.0008 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="132"
              r="1.66667"
              transform="rotate(180 16.3341 132)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 16.3341 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 16.3341 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 16.3341 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 16.3338 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 16.3338 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 16.3338 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 16.3338 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 16.3338 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 16.3338 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="132"
              r="1.66667"
              transform="rotate(180 1.66732 132)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 1.66732 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 1.66732 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 1.66732 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 1.66732 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 1.66732 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 1.66732 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 1.66732 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 1.66732 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 1.66732 1.66683)"
              fill="#3758F9"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Faq;
