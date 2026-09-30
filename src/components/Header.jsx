import "./Header.css";
function Header() {
    return (
        <header>
            <div>
                <strong>onit Dev </strong>
                <span>웹/앱 개발 파트너</span>
            </div>

            <nav>
                <a href="#services">서비스</a>
                <a href="#portfolio">포트폴리오</a>
                <a href="#process">개발과정</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">문의하기</a>
            </nav>
        </header>
    );
}

export default Header;