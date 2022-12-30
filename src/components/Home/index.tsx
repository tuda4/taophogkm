import React from "react";
import { motion } from "framer-motion";
import { SelectPage } from "@/shared/types";
import banner from "../../assets/zyro-image.png";
import Logo from "../../assets/logo.png";
import ContactButton from "@/shared/ContactButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { MapPinIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import Banner from "./Banner";

type Props = {
  setSelectPage: (value: SelectPage) => void;
};

const index = ({ setSelectPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  return (
    <section
      id="Trang chủ"
      className="gap-16 bg-gray-20 py-10 lg:h-full lg:pb-0 bg-orange-50"
    >
      <motion.div
        className="mx-auto w-5/6 items-center justify-center lg:flex lg:h-5/6 rounded-3xl mt-12 bg-orange-300 py-10 px-8 relatice"
        onViewportEnter={() => setSelectPage(SelectPage.Home)}
      >
        {isAboveMediumScreens && (
          <motion.div
            className="mt-12 text-center  lg:text-[100px] md:text-[80px] font-extrabold absolute top-[15%] left-[12%] font-1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="opacity-20 uppercase text-gray-50">xin chào </h1>
          </motion.div>
        )}
        <div className="z-10 lg:mt-10 lg:basis-3/5">
          <motion.div
            className="lg:-mt-20 flex justify-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] lg:before:content-evolvetext flex items-center justify-center text-center">
                <h1 className="lg:text-[40px] xl:text-[60px] text-[30px] tracking-[4px] text-white font-medium uppercase ">
                  Tà
                </h1>
                <img src={Logo} className="w-12 p-2 h-full " alt="" />
                <h1 className="lg:text-[40px] xl:text-[60px] text-[30px] tracking-[4px] text-white font-medium uppercase ">
                  phớ
                </h1>
              </div>
              <div className="before:absolute before:z-[-1] lg:before:content-evolvetext flex items-center justify-center text-center gap-2">
                <h1 className="lg:text-[24px] text-[14px] xl:text-[36px] text-white font-medium tracking-[4px] uppercase font-1">
                  garden
                </h1>
                <h1 className="lg:text-[24px] text-[14px] xl:text-[36px] tracking-[4px] text-white font-medium uppercase font-1">
                  Kinh Môn
                </h1>
              </div>
              <p className="my-6 text-md lg:text-xl text-white text-center">
                Nhanh chân đến Tào Phớ Garden Kinh Môn tụ tập bạn bè, người thân
                để cùng thưởng thức tất cả món ngon hấp dẫn trong không gian
                xinh xẻo, chill chill dịp lễ này nha!
              </p>
              <p className="mt-6 text-md lg:text-xl text-white text-justify">
                🏫Địa chỉ: Khu phố Ẩm Thực - Đường Thanh Niên - Phường An Lưu
              </p>
              <p className="mb-6 text-md lg:text-xl text-white text-justify">
                ☎️Hotline: 0859.318.318
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mb-2 z-30 flex items-center gap-8 justify-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="animate-bounce -bottom-7 absolute ">
              <CursorArrowRaysIcon className="w-8 h-full text-white" />
            </span>
            <ContactButton
              link={
                "https://www.google.com/maps/dir/21.0221987,105.8172885/20.9858487,106.5520688/@20.9351422,105.6172235,9z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
              }
              icons={<MapPinIcon width={24} />}
              children="Bản đồ"
            />
          </motion.div>
        </div>
        <div
          className="flex basis-3/5 justify-center lg:z-10
              lg:ml-32 lg:justify-items-end "
        >
          <img
            width={"85%"}
            className="rounded-xl  overflow-hidden"
            alt="home-pageGraphic"
            src={banner}
          />
        </div>
      </motion.div>
      <Banner />
    </section>
  );
};

export default index;
