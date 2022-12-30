import React from "react";
import { motion } from "framer-motion";
import { SelectPage } from "@/shared/types";
import ContactButton from "@/shared/ContactButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "../../assets/logo.png";
import slider from "@/assets/slider/slider";
import Slider from "../../shared/Slider";
import { BsFacebook, BsTelephonePlus, BsMessenger } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
type Props = {
  setSelectPage: (value: SelectPage) => void;
};

const index = ({ setSelectPage }: Props) => {
  return (
    <section
      id="Feedback"
      className="gap-16 bg-gray-20 py-10 lg:h-full bg-orange-50 "
    >
      <motion.div
        className="mx-auto w-5/6  lg:h-5/6 rounded-3xl mt-12  py-10 px-8 relatice"
        onViewportEnter={() => setSelectPage(SelectPage.Order)}
      >
        <h1 className="lg:text-[40px] xl:text-[70px] text-[36px] tracking-[4px] text-[#292048] font-medium uppercase font-1 text-center">
          Feedback
        </h1>
      </motion.div>
      <div className=" relative">
        <div className="z-10 lg:mt-10 ">
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
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] lg:before:content-evolvetext flex items-center justify-center text-center tracking-[4px] text-[#292048] font-medium uppercase mt-12 py-1 px-2 rounded-full bg-red-200">
                <h1 className="">Liên lạc với chúng tớ qua</h1>
              </div>
              <p className="my-3 text-md text-[#292048]  text-"></p>
            </div>
          </motion.div>
          <motion.div
            className="mb-2 py-6 flex items-center gap-8 justify-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ContactButton
              icons={<BsFacebook size={30} />}
              link={"https://www.facebook.com/profile.php?id=100066545121526"}
            />
            <ContactButton
              icons={<BsTelephonePlus size={30} />}
              link={"tel:+84859318318"}
            />
            <ContactButton icons={<FaTiktok size={30} />} link={"/"} />
          </motion.div>
        </div>
        <div
          className="pt-4 mx-auto w-5/6 flex justify-center lg:z-10
             lg:justify-items-end overflow-hidden "
        ></div>
       
      </div>
      <div className="">
        
        <h1 className="text-center text-sm text-[#292048]">
          &#169; {`2023 - Tào phớ garden Kinh Môn (Tào phớ garden - 2017)`}
        </h1>
      </div>
    </section>
  );
};

export default index;
