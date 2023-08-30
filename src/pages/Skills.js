import { BiLogoReact,BiLogoGithub } from "react-icons/bi";

function Skills() {
    return(
        <div className="Skills">
            <div className="title">
                {/* <span className="big">MYSKILLS</span> */}
                <h1 className="small">SKILLS</h1>
            </div>

            <div className="Skills-1">

                <div className='React'>
                    <div>
                        <BiLogoReact size={40} color="black"/>
                        <span>React</span>
                    </div>                    
                    <ul>
                        <li>컴포넌트 기반으로 설계하여 작동 방식을 이해하고 활용합니다.</li>
                        <li>리액트의 다양한 라이브러리를 활용합니다.</li>
                        <li>상태관리 라이브러리 Recoil을 활용합니다.</li>
                    </ul>
                </div> 

                <div className='javascript'>
                    <div>
                        <img src='img/javascript.png' alt=""/>
                        <span>JavaScript</span>
                    </div>                    
                    <ul>
                        <li>JS로 웹 제작이 가능합니다.</li>
                        <li>리액트와 함께 사용해 SPA을 제작 합니다.</li>
                        <li>ES6와 자바스크립트 문법에 맞게 사용합니다.</li>
                    </ul>
                </div> 
                
                <div className='html'>
                    <div>
                        <img src='img/html5.png' alt=""/>
                        <span>HTML5</span>
                    </div>                    
                    <ul>
                        <li>브라우저와의 호환성을 검토하여 개발합니다.</li>
                        <li>시맨틱 태그를 유용하게 사용하여 코드의 가독성을 높입니다.</li>
                        <li>localStorage와 sessionStorage를 활용합니다.</li>
                    </ul>
                </div>
                <div className='css'>
                    <div>
                        <img src='img/css3.png' alt=""/>
                        <span>CSS3</span>
                    </div>                    
                    <ul>
                        <li>미디어 쿼리를 활용하여 반응형 웹을 제작합니다.</li>
                        <li>시각적으로 깔끔하고 풍부한 개발을 선호합니다.</li>
                    </ul>
                </div> 
                <div className='typeScript'>
                    <div>
                        <img src='img/typescript.png' alt=""/>
                        <span>TypeScript</span>
                    </div>                    
                    <ul>
                        <li>변수와 함수의 타입을 명시하며 오류를 예방할 수 있습니다.</li>
                        <li>협업에서 코드의 가독성과 유지 보수성을 향상시킬 수 있습니다.</li>
                    </ul>
                </div>
                <div className='firebase'>
                    <div>
                        <img src='img/firebase.png' alt=""/>
                        <span>Firebase</span>
                    </div>                    
                    <ul>
                        <li>간단한 인증과 보안을 해결할 수 있습니다.</li>
                        <li>정적 웹 사이트나 SPA을 호스팅 할 수 있습니다.</li>
                    </ul>
                </div>
                <div className='github'>
                    <div>
                        <BiLogoGithub size={40} color="black"/>
                        <span>Github</span>
                    </div>                    
                    <ul>
                        <li>Github를 활용해 협업한 경험이 있습니다.</li>
                        <li>Github로 코드를 관리합니다.</li>
                    </ul>
                </div>
            </div>
            <h1>EXPERIENCE AND EDUCATION</h1>

            <div className="Skills-2">
                <div className='html'>
                    <div>
                        <img src='img/soongsil.png' style={{borderRadius:"7px"}} alt=""/>
                        <span>숭실원격평생교육원대학교(4년)</span>
                    </div>                    
                    <ul>
                        <li>23년 6월 ~ 진행 중</li>
                        <li>컴퓨터공학</li>
                        <li>데이터베이스, 알고리즘, 네트워크, 운영체제, 멀티미디어개론, 등</li>
                    </ul>
                </div>
                <div className='html'>
                    <div>
                        <img src='img/dongyang.jpg' style={{borderRadius:"7px"}} alt=""/>
                        <span>동양미래대학교(2년)</span>
                    </div>                    
                    <ul>
                        <li>18년 3월 ~ 22년 2월</li>
                        <li>컴퓨터공학</li>
                        <li>JAVA, C, PYTHON 등 기본 개발 언어 수강</li>
                        <li>컴퓨터공학 이론 수강</li>
                        <li>졸업프로젝트 : 안드로이드 자바 앱 개발</li>
                    </ul>
                </div>
                <div className='html'>
                    <div>
                        <img src='img/inflearn.jpg' style={{borderRadius:"7px"}} alt=""/>
                        <span>인프런 개발자 교육(2주)</span>
                    </div>                    
                    <ul>
                        <li>리액트&파이어베이스를 이용한 웹 개발 필수 기능 구현</li>
                        <li>회원가입, 로그인 기능 구현</li>
                        <li>게시글 작성 및 저장 삭제 기능 구현</li>
                        <li>https://react-with-firebase-39fa2.web.app/login</li>
                    </ul>
                </div>
                <div className='html'>
                    <div>
                        <img src='img/wanted.png' style={{borderRadius:"7px"}} alt="" />
                        <span>원티드 개발자 교육(4주)</span>
                    </div>                    
                    <ul>
                        <li>TypeScript</li>
                        <li>TypeScript를 쓰는 이유</li>
                    </ul>
                </div>
                <div className='html'>
                    <div>
                        <img src='img/programmers.png' style={{borderRadius:"7px"}} alt=""/>
                        <span>프로그래머스 개발자 교육(4주)</span>
                    </div>                    
                    <ul>
                        <li>FE 채용 과제로 배우는 자바스크립트</li>
                        <li>React.js, Vue.js의 지식이 되는 JavaScript의 기본기를 익히기 위한 과목으로, VanillaJS (외부 라이브러리/프레임워크를 사용하지 않는 순수 JavaScript)만을 활용해서 웹 기능을 개발하고 유지보수하는 방법에 대한 내용을 공부합니다.</li>
                        <li>1주차 : 코딩테스트 ≫ 레이아웃,API 요청 ≫ 로딩 UI, 랜덤버튼 ≫ 숫자와 문자열 ≫ 로컬스토리지 ≫ 스크롤과 결과 없음</li>
                        <li>2주차 : Intersectionobserver ≫ API ≫ 모듈화 ≫ 테스트 ≫ 추가 요구사항 해결하기 ≫ 코드리뷰 ≫ 최종 테스트</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills