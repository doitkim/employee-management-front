import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie"; // 쿠키 라이브러리 사용

const LoginForm = () => {
  const branchId = useRef(); // 지점코드 선택
  const authNumber = useRef(); // 인증번호 선택
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["cookieName"]);
  const [isLogin, setIsLogin] = useState(false); // 로그인 상태 확인

  useEffect(() => {
    // 쿠키에 JWT Login 값이 있을 경우
    if (cookie["JWTLogin"]) {
      setIsLogin(true); // 로그인 상태 설정
    }
    if (isLogin) {
      navigate("/home"); // 로그인 상태면 홈으로 이동
    }
  }, [isLogin]); // 로그인 상태값 바뀔 때마다 반응

  // 로그인 처리
  const LoginHandler = async (e) => {
    e.preventDefault();

    try {
      // 지점 정보 조회 테스트 이후 .env로 주소 옮길 것
      const res = await axios.post("http://localhost:8000/branchs", {
        branchId: branchId.current.value,
        authNumber: authNumber.current.value,
      });

      /*쿠키 라이브러리를 사용하여 쿠키 저장
      Secure는 웹브라우저와 웹서버가 https로 통신하는 경우만 웹브라우저가 쿠키를 서버로 전송하는 옵션.
      HttpOnly는 자바스크립트의 document.cookie를 이용해서 쿠키에 접속하는 것을 막는 옵션입니다.
      즉, 쿠키를 훔쳐가는 행위를 막기 위한 방법이다. 
      httpOnly 옵션은 ie 브라우져를 쓰거나 .com 등으로 끝나는 일반적인 도메인에만 적용가능하다.
      IP나 인트라넷 호스트네임의 경우 사용하지 못한다.
      */
      if (res.data) {
        // 만료 시간 설정
        const expire = new Date();
        expire.setDate(Date.now() + 1000 * 60 * 60);

        // 쿠키 설정
        setCookie("JWTLogin", res.data, {
          path: "/",
          sameSite: true,
          expires: expire,
        });
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("지점 정보가 없습니다.");
    }
  };

  return (
    <>
      <form onSubmit={LoginHandler}>
        <div>지점인증</div>
        <div>지점관리를 위한 지점 인증을 해주세요</div>
        <hr />
        <input
          placeholder="지점코드 4자리입력"
          // maxLength="4"
          required
          ref={branchId}
        />
        <input
          type="password"
          placeholder="인증번호 4자리입력"
          // maxLength="4"
          required
          ref={authNumber}
        />
        <button>인증하기</button>
      </form>
      ;
    </>
  );
};

export default LoginForm;
