import React, { CSSProperties } from "react";
import MemberCard2 from "./MemberCard2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ConorImg from "@/images/members/conor.webp";

const slideStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const memberInfo = [
  {
    name: "Jonathan Galingo",
    role: "Personal Trainer",
    memberImg: ConorImg,
    memberImgAlt: "Jonathan Galingo picture",
    linkedinURL: "#"
  },
  {
    name: "Jonathan Galingo",
    role: "Personal Trainer",
    memberImg: ConorImg,
    memberImgAlt: "Jonathan Galingo picture",
    linkedinURL: "#"
  },
  {
    name: "Jonathan Galingo",
    role: "Personal Trainer",
    memberImg: ConorImg,
    memberImgAlt: "Jonathan Galingo picture",
    linkedinURL: "#"
  },
  {
    name: "Jonathan Galingo",
    role: "Personal Trainer",
    memberImg: ConorImg,
    memberImgAlt: "Jonathan Galingo picture",
    linkedinURL: "#"
  },
];

const Members2 = () => {
  return (
    <section className="flex relative flex-col justify-center mx-auto py-10">
      <div className="container">
        <h2 className="z-10 mb-4 text-xl text-primary-500 md:mb-0">
          Nosso Time
        </h2>
        <h3 className="z-10 text-3xl font-semibold leading-10 max-w-[45ch]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
          sapiente!
        </h3>
        <Swiper
          className="w-full h-[30rem]"
          style={{
            // @ts-ignore
            "--swiper-theme-color": "#84cc16",   
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
        >
          {
            memberInfo.map((member, index) => {
              return (
                <SwiperSlide 
                  key={`slider-${index}`}
                  style={slideStyle}
                >
                  <MemberCard2 
                    name={member.name}
                    role={member.role} 
                    memberImg={member.memberImg}
                    memberImgAlt={member.memberImgAlt}
                    linkedinURL={member.linkedinURL}
                  />
                </SwiperSlide>
              ) 
            })
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Members2;
