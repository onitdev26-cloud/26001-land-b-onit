import { Link, useParams } from "react-router-dom";
import "./PortfolioDetail.css";

function PortfolioDetail() {
    const { id } = useParams();

    const portfolio = {
        1: {
            title: "기업 랜딩페이지",
            description: "회사 서비스 소개 및 문의 유도를 위한 랜딩페이지",
            purpose: "광고와 QR코드로 유입된 고객에게 회사 서비스를 빠르게 전달하고 제작 문의로 연결합니다.",
            features: [
                "회사 및 서비스 소개",
                "핵심 서비스 안내",
                "포트폴리오 구성",
                "개발 과정 안내",
                "제작 비용 안내",
                "문의 CTA 구성",
            ],
        },

        2: {
            title: "온라인 스토어",
            description: "상품 소개와 구매를 중심으로 구성한 온라인 스토어",
            purpose: "상품 정보를 고객에게 전달하고 온라인 구매까지 연결할 수 있도록 구성합니다.",
            features: [
                "상품 정보 구성",
                "상품 상세 페이지",
                "장바구니 기능",
                "구매 화면 구성",
                "고객 문의 기능",
                "모바일 화면 대응",
            ],
        },

        3: {
            title: "업무처리 앱",
            description: "반복적인 업무를 간편하게 처리하는 웹 애플리케이션",
            purpose: "브라우저 환경에서 반복적인 업무를 효율적으로 처리할 수 있도록 화면과 기능을 구성합니다.",
            features: [
                "업무 데이터 입력",
                "업무 목록 관리",
                "상태 확인",
                "검색 및 조회",
                "반복 업무 처리",
                "브라우저 기반 사용",
            ],
        },
    };

    const currentPortfolio = portfolio[id];

    if (!currentPortfolio) {
        return (
            <main>
                <h1>포트폴리오를 찾을 수 없습니다.</h1>
                <Link to="/">홈으로 돌아가기</Link>
            </main>
        );
    }
    
    return (
        <main>
            <section>
                <p>PORTFOLIO</p>

                <h1>{currentPortfolio.title}</h1>

                <p>{currentPortfolio.description}</p>

                <h2>제작 목적</h2>
                <p>{currentPortfolio.purpose}</p>

                <h2>주요 구성</h2>

                <ul>
                    {currentPortfolio.features.map((feature)=>(
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>

                <Link to="/contact">제작 문의하기</Link>

                <br />

                <Link to="/#portfolio">포트폴리오 목록으로 돌아가기</Link>
            </section>
        </main>
    );
}

export default PortfolioDetail;