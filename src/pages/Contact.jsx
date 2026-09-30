import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [status, setStatus] = useState("idle"); //Formspree

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setStatus("error");  //Formspree
            return;
        }

        setStatus("sending");  //Formspree

        //Formspree
        try {
            const response = await fetch("https://formspree.io/f/mzezybyv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setStatus("success");
                navigate("/contact/complete");
            } else {
                setStatus("error");
            }

        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main>
            <section>
                <p>CONTACT</p>

                <h1>웹사이트 제작 문의</h1>

                <p>
                    사업 목적과 필요한 기능을 알려주시면
                    제작 범위와 비용을 상담해 드립니다.
                </p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">이름</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="이름을 입력해주세요."
                        />
                    </div>

                    <div>
                        <label htmlFor="company">회사명</label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="회사명을 입력해주세요."
                        />
                    </div>

                    <div>
                        <label htmlFor="email">이메일</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="이메일을 입력해주세요."
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">연락처</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="연락처를 입력해주세요."
                        />
                    </div>

                    <div>
                        <label htmlFor="service">제작 유형</label>

                        <select
                            id="service"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                        >
                            <option value="">선택해주세요.</option>
                            <option value="homepage">홈페이지</option>
                            <option value="landing">랜딩페이지</option>
                            <option value="store">온라인 스토어</option>
                            <option value="app">업무처리 앱</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message">문의 내용</label>

                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="필요한 기능이나 제작 목적을 입력해주세요."
                            rows="6"
                        />
                    </div>

                    {/*Formspree */}
                    {status === "error" && (
                        <p>전송에 실패했습니다. 잠시 후 다시 시도해 주세요.</p>
                    )}

                    {status === "sending" && <p>문의 내용을 전송하고 있습니다...</p>}

                    <button type="submit" disabled={status === "sending"}>
                        {status === "sending" ? "전송 중..." : "문의하기"}
                    </button>

                </form>

                <Link to="/">메인페이지로 가기</Link>
            </section>
        </main>
    );
}

export default Contact;