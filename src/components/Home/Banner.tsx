import React from "react";
import { motion } from "framer-motion";
import { SelectPage } from "@/shared/types";
import banner from "../../assets/zyro-image.png";
import Logo from "../../assets/logo.png";
import ContactButton from "@/shared/ContactButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { PhoneArrowUpRightIcon, CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import Slider from "@/shared/Slider";
import foods from "@/assets/food/foods";




const Banner = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  return (
    <section
      id="Trang chủ"
      className="gap-16 bg-gray-20 pt-10 lg:h-full lg:pb-0 bg-orange-50"
    >
      <motion.div className="mx-auto w-5/6 items-center justify-center lg:flex lg:h-5/6 rounded-3xl mt-12 px-8 relatice md:flex-row-reverse">
       
        <div className="z-10 lg:mt-10 lg:basis-3/5">
          <motion.div
            className="lg:-mt-20 flex justify-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] lg:before:content-evolvetext flex items-center justify-center text-center">
                <h1 className="lg:text-[40px] text-[30px] tracking-[4px] text-[#292048] font-medium uppercase ">
                  Tà
                </h1>
                <img src={Logo} className="w-12 p-2 h-full " alt="" />
                <h1 className="lg:text-[40px] text-[30px] tracking-[4px] text-[#292048] font-medium uppercase ">
                  phớ
                </h1>
              </div>
              <div className="before:absolute before:z-[-1] lg:before:content-evolvetext flex items-center justify-center text-center gap-4">
                <h1 className="lg:text-[24px] text-[#292048] font-medium tracking-[2px] uppercase font-1">
                  garden
                </h1>
                <h1 className="lg:text-[24px] tracking-[2px] text-[#292048] font-medium uppercase font-1">
                  Kinh Môn
                </h1>
              </div>
              <p className="my-6 text-md text-[#292048] md:text-center text-justify">
                Cả ngày làm việc bận rộn, đừng quên nạp đầy năng lượng với bữa
                trưa NGON - BỔ - KHỎE tại Tào Phớ Garden Menu đa dạng cho bạn
                thỏa thích lựa chọn nào cháo sườn, phở trộn, phở chiên, phở
                cuốn… Món nào món nấy đầy phủ phê, ăn no nê cả ngày dài. Đừng
                quên gọi thêm 1 bát tào phớ thanh thanh, mát mát để bữa ăn thêm
                ngon miệng nha! 👉 Ghé Tào Phớ Garden chọn cho mình chỗ ngồi
                thật chill hoặc đặt <span className="bg-orange-300">#ship</span> món ăn nóng hổi tới tận nhà nhé!
              </p>
            </div>
          </motion.div>
          <motion.div
            className="mb-2 flex items-center gap-8 justify-center relative"
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
              <CursorArrowRaysIcon className="w-8 h-full text-gray-700" />
            </span>
            <ContactButton
              link={"tel:+84859318318"}
              icons={<PhoneArrowUpRightIcon width={24} />}
              children="Gọi ngay"
            />
          </motion.div>
        </div>
        <div
          className="pt-4 flex basis-3/5 justify-center lg:z-10
              lg:mr-32 lg:justify-items-end overflow-hidden "
        >
          {<Slider images={foods}/>}
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
