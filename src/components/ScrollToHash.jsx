import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView();
            }
        }
    }, [location]);

    return null;
}

export default ScrollToHash;

// 위 코딩 이후
// App.jsx에 import하기 
// App.jsx의 return 안에 추가하기
// 이후 ScrollToHash가 적용 됨 
// (React Router를 사용하는 React프로젝트에서 만 사용가능)