import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectPage } from "@/shared/types";
type Props = {
  page: string;
  selectPage: SelectPage;
  setSelectPage: (value: SelectPage) => void;
  props?: string
};

const Link = ({ page, selectPage, setSelectPage, props }: Props) => {
  const pageSelect : string = "bg-orange-500"
  const lowerCasePage = page as SelectPage;
  return (
    <AnchorLink
      className={`${
        selectPage === lowerCasePage ? pageSelect : ""
      } text-lg font-medium text-[#292048] transition duration-300 py-1 px-4 w-[180px] md:w-fit rounded-full rounded-tr-none hover:underline ${props}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
