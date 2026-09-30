import "./Portfolio.css";

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>포트폴리오</h2>

            <p>실제 사업 목적에 맞춰 제작되는 웹 프로젝트입니다.</p>

            <div>
                <article>
                    <h3>기업 랜딩페이지</h3>
                    <p>회사 서비스 소개 및 문의 유도</p>
                    <a href="/portfolio/1">자세히 보기</a>
                </article>

                <article>
                    <h3>온라인 스토어</h3>
                    <p>상품 소개 및 구매 중심 웹사이트</p>
                    <a href="/portfolio/2">자세히 보기</a>
                </article>

                <article>
                    <h3>업무처리 앱</h3>
                    <p>반복적인 업무를 간편하게 처리하는 웹 앱</p>
                    <a href="/portfolio/3">자세히 보기</a>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;