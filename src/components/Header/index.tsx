import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Link from "./Link";
import { SelectPage } from "@/shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  isTopOfPage: boolean;
  selectPage: SelectPage;
  setSelectPage: (value: SelectPage) => void;
};

const index = ({ isTopOfPage, selectPage, setSelectPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");
  const navbarBackground = isTopOfPage ? "" : "mobile-modal";
  return (
    <nav>
      <div
        className={`${navbarBackground}  ${flexBetween} w-full py-4 fixed top-0 z-30  transition ease-linear duration-200 `}
      >
        <div className={`${flexBetween} w-5/6 mx-auto`}>
          {isAboveMediumScreen ? (
            <div className={`${flexBetween} w-full gap-12`}>
              {/* left side */}

              <div className={`${flexBetween} gap-16`}>
                <Link
                  page={SelectPage.Home}
                  selectPage={selectPage}
                  setSelectPage={setSelectPage}
                />
                <Link
                  page={SelectPage.Menu}
                  selectPage={selectPage}
                  setSelectPage={setSelectPage}
                />
              </div>

              {/* mid side */}
              <img alt="logo" src={Logo} width={50} height={50} />
              {/* right side */}
              <div className={`${flexBetween} gap-16`}>
                <Link
                  page={SelectPage.AboutUs}
                  selectPage={selectPage}
                  setSelectPage={setSelectPage}
                />
                <Link
                  page={SelectPage.Order}
                  selectPage={selectPage}
                  setSelectPage={setSelectPage}
                />
              </div>
            </div>
          ) : (
            <div className={`${flexBetween} relative w-full mx-auto`}>
              <button
                className="rounded-full bg-orange-300 p-1 hover:bg-orange-400 transition duration-200"
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <Bars3Icon
                  height={28}
                  width={28}
                  className="rounded-full text-[#292048]"
                />
              </button>
              <img alt="logo" src={Logo} width={40} height={40} />
              <div>
                <Link
                  page={SelectPage.Menu}
                  selectPage={selectPage}
                  setSelectPage={setSelectPage}
                  props={'text-[14px] rounded-full px-2 bg-red-400'}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* moblie modal */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div
          className={`fixed right-0 bottom-0 z-50 h-full w-[300px] mobile-modal origin-right duration-500 `}
        >
          {/* close icon */}
          <div className="flex justify-end mx-9 my-6 rounded-full ">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon
                height={28}
                width={28}
                className="text-gray-700 hover:text-gray-900 transition duration-200 bg-orange-500 rounded-full"
              />
            </button>
          </div>

          {/* section */}
          <div className="ml-[30%] flex flex-col gap-10 text-3xl">
            <Link
              page={SelectPage.Home}
              selectPage={selectPage}
              setSelectPage={setSelectPage}
            />

            <Link
              page={SelectPage.AboutUs}
              selectPage={selectPage}
              setSelectPage={setSelectPage}
            />
            <Link
              page={SelectPage.Order}
              selectPage={selectPage}
              setSelectPage={setSelectPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default index;
