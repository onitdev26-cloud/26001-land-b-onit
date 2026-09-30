import "./Services.css";

function Services() {
    return (
        <section id="services">
            <h2>개발 서비스</h2>

            <p>사업 목적과 예산에 맞춰 필요한 웹 서비스를 제작합니다.</p>

            <div>
                <article>
                    <h3>홈페이지</h3>
                    <p>회사와 브랜드를 소개하는 기업 홈페이지</p>
                </article>

                <article>
                    <h3>랜딩페이지</h3>
                    <p>광고와 QR코드로 유입된 고객의 문의를 유도하는 페이지</p>
                </article>

                <article>
                    <h3>온라인 스토어</h3>
                    <p>상품 소개와 구매 기능을 중심으로 구성한 쇼핑몰</p>
                </article>

                <article>
                    <h3>업무처리 앱</h3>
                    <p>브라우저와 OS 환경에서 사용하는 업무용 애플리케이션</p>
                </article>
            </div>
        </section>
    );
}

export default Services;