import React from "react";
import { food } from "@/utils/data";
import { FireIcon } from "@heroicons/react/24/solid";

type Props = {
  props: food[];
}

const BestSaler = ({props}: Props) => {
  return (
    <div>
      {props.map(
        (prop) =>
          prop.isBestSaler && (
            <div
              key={prop.name}
              className="flex justify-between md:text-xl text-[14px] py-2 relative"
            >
              <h1 className="flex-[3] relative">
                {prop.name}
                {prop.isBestSaler && (
                  <span className="absolute -top-1 -left-3 rotate-12">
                    <FireIcon className="text-red-700 -rotate-45" width={16} />
                  </span>
                )}
              </h1>
              <p className="flex-1 text-end text-red-600">{prop.price}k</p>
            </div>
          )
      )}
    </div>
  );
};

export default BestSaler;
