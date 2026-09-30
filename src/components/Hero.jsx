import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <section>
            <p>저비용 · 빠른 제작 · 실무형 웹 개발</p>

            <h1>
                홈페이지부터
                <br />
                온라인 스토어까지
            </h1>

            <p>
                필요한 기능만 담아 합리적인 비용으로 제작합니다.
                <br />
                QR코드 하나로 고객에게 바로 연결되는 웹사이트를 만들어 드립니다.
            </p>

            <Link to="/contact">제작 문의하기</Link>
        </section>
    );
}

export default Hero;