import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Projects() {

    const [showTbems, setShowTbems] = useState(false)
    const [showSaffy, setShowSaffy] = useState(false)
    const [showIbiz, setShowIbiz] = useState(false)
    const [showMemo, setShowMemo] = useState(false)

    return(
        <div className="Projects">
            <div className='title'>
                <h1>PROJECTS</h1>
            </div>
            
            <div className="Projects-1">
                <div className='Tbems'>
                    <div className="div1">
                        <span>건물 에너지 관리 시스템 R&D 정부사업 SI</span>
                        <span style={{position:"absolute",right:"1%"}}>22.2~22.9</span>  
                    </div>    
                    <div className="div2">
                        <ul>
                            <li>건물 에너지 관리 시스템 웹 페이지</li>
                            <li>건물 에너지 총 사용량을 불러와 시각화 하고 전월, 전년 평균과 현재 평균 사용량과 비교하여 에너지 사용량 추이를 알 수 있습니다.</li>
                            <li>단위 구역(사무실, 복도, 등)의 에너지 사용량을 조회 및 전원 버튼 조작을 합니다.</li>
                            <li>건물에 대한 다양한 정보들을 조회할 수 있습니다.</li>
                            <li>개발인원 : 퍼블리셔1명 + 프론트1명 + 백1명</li>
                            <li>프론트 : React, JavaScript, HTML, CSS, StyledComponent, Ajax, RestAPI, ApexCharts</li>
                            <li>백 : Node.js, RedisDB, InfluxDB</li>
                            <li>환경 : Window, Linux, Github, PostMan</li>
                        </ul>
                        <img src="img/TBEMS1.png" alt="" onClick={()=>setShowTbems((e)=>!e)}/>
                    </div>                    
                </div>  
                <div className='Saffy'>
                    <div className="div1">
                        <span>웹 에이전시 프론트 개발 지원_Saffy</span>
                        <span style={{position:"absolute",right:"1%"}}>22.12~23.1</span>  
                    </div>    
                    <div className="div2">
                        <ul>
                            <li>담당 역할 : 로그인 페이지(SNS로그인, 페이지 분기 처리), 마이 페이지(개인정보 수정 및 등록) 구현</li>
                            <li>개발 인원 : 퍼블리셔 2명 + 프론트 4명 + 백 4명 + PM 2명</li>
                            <li>프론트 : JavaScript, HTML, SCSS</li>
                            <li>백 : PHP, JavaScript</li>
                            <li>환경 : Window, Github, Figma, PostMan</li>
                        </ul>
                        <img src="img/saffy1.png" alt="" onClick={()=>setShowSaffy((e)=>!e)}/>
                    </div>                    
                </div>  
                <div className='IbizSoft'>
                    <div className="div1">
                        <span>웹 에이전시 프론트 개발 지원_IbizSoft</span>
                        <span style={{position:"absolute",right:"1%"}}>22.12~23.1</span>  
                    </div>    
                    <div className="div2">
                        <ul>
                            <li>담당 역할 : 대시 보드 페이지(데이터 테이블 표기 및 그래프 표기) 및 권한 설정 페이지(개인 설정 수정 및 개인 정보 등록) 구현</li>
                            <li>개발 인원 : 퍼블리셔 2명 + 프론트 4명 + 백 4명 + PM 2명</li>
                            <li>기술 스택 : Window, TypeScript, PHP, SCSS, Github, Figma, PostMan, Recoil ,Ajax</li>
                        </ul>
                        <img src="img/ibizsoft1.png" alt="" onClick={()=>setShowIbiz((e)=>!e)}/>
                    </div>                    
                </div>    
                <div className='myDiary'>
                    <div className="div1">
                        <span>개인 메모장 (TOY PROJECT)</span>
                        <span style={{position:"absolute",right:"1%"}}>23.6~23.6</span>  
                    </div>    
                    <div className="div2">
                        <ul>
                            <li>리액트&파이어베이스를 이용한 웹 개발 필수 기능 구현</li>
                            <li>회원가입, 로그인 기능 구현</li>
                            <li>게시글 작성 및 저장 삭제 기능 구현</li>
                            <li>
                                <Link to="https://react-with-firebase-39fa2.web.app">
                                    링크 이동
                                </Link>
                            </li>
                            <li>기술 스택 : JavaScript, HTML, CSS, FireBase, Window, Github</li>
                        </ul>
                        <img src="img/myDiary2.png" alt="" onClick={()=>setShowMemo((e)=>!e)}/>
                    </div>                    
                </div>              
            </div>

            {showTbems && <div className="modal">
                <div>
                    <button onClick={()=>setShowTbems(false)}>x</button>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={1}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide><img src='img/TBEMS1.png' alt='' onClick={()=>setShowTbems(false)}/></SwiperSlide>
                        <SwiperSlide><img src='img/TBEMS2.png' alt='' onClick={()=>setShowTbems(false)}/></SwiperSlide>
                        <SwiperSlide><img src='img/TBEMS3.png' alt='' onClick={()=>setShowTbems(false)}/></SwiperSlide>
                    </Swiper>
                </div>                
            </div>}
            {showSaffy && <div className="modal">
                <div>
                    <button onClick={()=>setShowSaffy(false)}>x</button>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={1}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide><img src='img/saffy1.png' alt='' onClick={()=>setShowSaffy(false)}/></SwiperSlide>
                        <SwiperSlide><img src='img/saffy2.png' alt='' onClick={()=>setShowSaffy(false)}/></SwiperSlide>
                    </Swiper>
                </div>                
            </div>}
            {showIbiz && <div className="modal">
                <div>
                    <button onClick={()=>setShowIbiz(false)}>x</button>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={1}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide><img src='img/ibizsoft1.png' alt='' onClick={()=>setShowIbiz(false)}/></SwiperSlide>
                        <SwiperSlide><img src='img/ibizsoft2.png' alt='' onClick={()=>setShowIbiz(false)}/></SwiperSlide>
                        <SwiperSlide><img src='img/ibizsoft3.png' alt='' onClick={()=>setShowIbiz(false)}/></SwiperSlide>
                    </Swiper>
                </div>                
            </div>}
            {showMemo && <div className="modal">
                <div>
                    <button onClick={()=>setShowMemo(false)}>x</button>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={1}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide><img src='img/mydiary1.png' alt='' onClick={()=>setShowMemo(false)}/></SwiperSlide>
                        <SwiperSlide><img src='img/mydiary2.png' alt='' onClick={()=>setShowMemo(false)}/></SwiperSlide>
                    </Swiper>
                </div>                
            </div>}
        </div>
    )
}

export default Projects