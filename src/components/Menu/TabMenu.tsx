import React from "react";
import {SparklesIcon} from '@heroicons/react/24/solid'
import { food } from "@/utils/data";

type Props = {
  props: food[];
}

const TabMenu = ({props}: Props) => {
  return (
    <div>
      {props.map((prop) => (
        <div
          key={prop.name}
          className="flex justify-between md:text-xl text-[14px] py-2 relative"
        >
          <h1 className="flex-[3] relative">
            {prop.name}
            {prop.isBestSaler && (<span className="absolute -top-1 -left-3 rotate-12"><SparklesIcon className="text-red-700" width={16}/></span>
            )}
            {prop.isBestSaler && (<span className=" text-xs absolute -right-2 px-2 bg-red-500 text-white rotate-12 font-extralight animate-[linearHot_1s_linear_infinite]">hot</span>
            )}

          </h1>
          <p className="flex-1 text-end text-red-600">{prop.price}k</p>
        </div>
      ))}
    </div>
  );
};

export default TabMenu;
