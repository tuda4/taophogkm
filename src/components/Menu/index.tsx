import { motion } from "framer-motion";
import { SelectPage } from "@/shared/types";
import { Category } from "../../utils/data";
import {
  tpBienTau15k,
  tpTruyenThong,
  tpBienTau18k,
  tpBienTau20k,
  tpBienTau25k,
  che,
  yakult,
  koreanFastFood,
  junkFood,
  otherFood,
  drinks,
  hotDog,
} from "../../utils/data";
import TabMenu from "./TabMenu";
import { useState } from "react";
import BestSaler from "./BestSeller";
import { food } from "../../utils/data";

export type Props = {
  setSelectPage: (value: SelectPage) => void;
};

const index = ({ setSelectPage }: Props) => {
  const [isIndex, setIsIndex] = useState<number | undefined>(0);
  const activeTab: string = "bg-red-500 text-white";
  return (
    <section
      id="Menu"
      className="gap-12 mt-5 pt-6 pb-8 bg-gray-20 lg:h-full bg-orange-50"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="pt-12"
        onViewportEnter={() => setSelectPage(SelectPage.Menu)}
      >
        <h1 className="font-1 font-medium  text-center underline underline-offset-4 lg:text-[40px] text-[28px] text-[#292048]">
          menu
        </h1>
        <div className="flex lg:gap-2 gap-1 pb-6 mt-6 w-full justify-center flex-wrap text-[#292048]">
          {Category.map((title) => (
            <div
              key={title.index}
              onClick={() => setIsIndex(title.index)}
              className={`py-1 lg:px-4 px-2 flex items-center ${
                isIndex === title.index ? activeTab : ""
              } justify-center transition rounded-full cursor-pointer hover:bg-red-500`}
            >
              <h1 className="md:text-lg text-[12px] ">{title.name}</h1>
            </div>
          ))}
        </div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="w-5/6 lg:w-3/4 mx-auto gap-2 py-2 px-4 border-[1px] rounded-xl rounded-tr-none h-[65vh] md:h-full overflow-y-auto  glassBanner transition">
          <div hidden={isIndex !== 0}>
            {<BestSaler props={tpTruyenThong} />}
            {<BestSaler props={tpBienTau15k} />}
            {<BestSaler props={tpBienTau18k} />}
            {<BestSaler props={tpBienTau20k} />}
            {<BestSaler props={tpBienTau25k} />}
            {<BestSaler props={che} />}
            {<BestSaler props={yakult} />}
            {<BestSaler props={koreanFastFood} />}
            {<BestSaler props={otherFood} />}
            {<BestSaler props={hotDog} />}
            {<BestSaler props={junkFood} />}
            {<BestSaler props={drinks} />}
          </div>
          <div hidden={isIndex !== 1}>
            {<TabMenu props={tpTruyenThong} />}
            {<TabMenu props={tpBienTau15k} />}
            {<TabMenu props={tpBienTau18k} />}
            {<TabMenu props={tpBienTau20k} />}
            {<TabMenu props={tpBienTau25k} />}
          </div>
          <div hidden={isIndex !== 2}>{<TabMenu props={che} />}</div>
          <div hidden={isIndex !== 3}>{<TabMenu props={yakult} />}</div>
          <div hidden={isIndex !== 4}>{<TabMenu props={koreanFastFood} />}</div>
          <div hidden={isIndex !== 5}>{<TabMenu props={otherFood} />}</div>
          <div hidden={isIndex !== 6}>{<TabMenu props={hotDog} />}</div>
          <div hidden={isIndex !== 7}>{<TabMenu props={junkFood} />}</div>
          <div hidden={isIndex !== 8}>{<TabMenu props={drinks} />}</div>
        </div>
      </motion.div>
      </motion.div>
      
    </section>
  );
};

export default index;
