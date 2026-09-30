import "./FAQ.css";

function FAQ() {
    return (
        <section id="faq">
            <h2>자주 묻는 질문</h2>

            <article>
                <h3>Q. 제작 기간은 얼마나 걸리나요?</h3>
                <p>페이지 구성과 자료 준비 정도에 따라 달라집니다.</p>
            </article>

            <article>
                <h3>Q. 모바일에서도 볼 수 있나요?</h3>
                <p>네. 모바일 환경을 고려하여 화면을 구성합니다.</p>
            </article>

            <article>
                <h3>Q. 관리자 페이지도 제작할 수 있나요?</h3>
                <p>기본 B형에서는 제외되며 별도 개발로 진행할 수 있습니다.</p>
            </article>

            <article>
                <h3>Q. DB가 필요한 기능도 개발할 수 있나요?</h3>
                <p>가능하지만 B형 기본 범위에는 포함되지 않습니다.</p>
            </article>
        </section>
    );
}

export default FAQ;