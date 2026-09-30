import { Link } from "react-router-dom";
import "./ContactComplete.css";

function ContactComplete() {
    return (
        <main>
            <section>
                <p>CONTACT COMPLETE</p>

                <h1>문의가 접수되었습니다.</h1>

                <p>
                    제작 범위와 비용은 상담 내용을 기준으로 안내드립니다.
                </p>

                <Link to="/">홈으로 돌아가기</Link>
            </section>
        </main>
    );
}

export default ContactComplete;