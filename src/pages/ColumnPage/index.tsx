import React, { useState, useMemo } from "react";
import column1 from "@/assets/myPage/column-1.png";
import column2 from "@/assets/myPage/column-2.png";
import column3 from "@/assets/myPage/column-3.png";
import column4 from "@/assets/myPage/column-4.png";
import column5 from "@/assets/myPage/column-5.png";
import column6 from "@/assets/myPage/column-6.png";
import column7 from "@/assets/myPage/column-7.png";
import column8 from "@/assets/myPage/column-8.png";

const ColumnPage: React.FC = () => {
  const recommendList = useMemo(() => [
    { title: "RECOMMENDED COLUMN", type: "オススメ" },
    { title: "RECOMMENDED DIET", type: "ダイエット" },
    { title: "RECOMMENDED BEAUTY", type: "美容" },
    { title: "RECOMMENDED HEALTH", type: "健康" },
  ], []);

  const initialColumnList = useMemo(() => [
    { title: "2021.05.17 23:25", img: column1, content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tag: ["魚料理", "和食", "DHA"] },
    { title: "2021.05.17 23:25", img: column2, content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tag: ["魚料理", "和食", "DHA"] },
    { title: "2021.05.17 23:25", img: column3, content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tag: ["魚料理", "和食", "DHA"] },
    { title: "2021.05.17 23:25", img: column4, content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tag: ["魚料理", "和食", "DHA"] },
    { title: "2021.05.17 23:25", img: column5, content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tag: ["魚料理", "和食", "DHA"] },
    { title: "2021.05.17 23:25", img: column6, content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tag: ["魚料理", "和食", "DHA"] },
    { title: "2021.05.17 23:25", img: column7, content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tag: ["魚料理", "和食", "DHA"] },
    { title: "2021.05.17 23:25", img: column8, content: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", tag: ["魚料理", "和食", "DHA"] },
  ], []);

  const [columns, setColumns] = useState(initialColumnList);

  const loadMoreData = () => {
    setColumns((prevColumns) => [...prevColumns, ...initialColumnList]);
  };

  return (
    <div className="flex flex-col bg-white w-full">
      <div className="flex flex-col items-center mt-14">
        <div className="flex flex-row gap-8 justify-center items-center">
          {recommendList.map((item, index) => (
            <div
              key={`recommend-${index}`}
              className="flex flex-col justify-center items-center w-[216px] h-[144px] bg-[#2E2E2E] gap-2"
            >
              <div className="text-center font-medium text-[22px] text-[#FFCC21]">{item.title}</div>
              <div className="w-[56px] h-[1px] bg-white"></div>
              <div className="font-medium text-[18px] text-[#FFCC21]">{item.type}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-14">
          {columns.map((item, index) => (
            <div key={`column-${index}`} className="w-[234px] h-[222px]">
              <div
                className="flex flex-col justify-end items-start w-[234px] h-[144px] bg-cover"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="flex items-center bg-[#FFCC21] text-white text-[15px] font-medium w-36 h-6 px-1">
                  {item.title}
                </div>
              </div>
              <div className="text-gray-700 line-clamp-2">{item.content}</div>
              <div className="flex flex-wrap gap-2">
                {item.tag.map((tag, idx) => (
                  <span key={`tag-${index}-${idx}`} className="text-[#FF963C] text-[12px]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4 md:pt-6 pb-8 md:pb-16 flex w-full justify-center">
        <div
          onClick={() => loadMoreData()}
          className="bg-gradient-to-t from-[#FFCC21] to-[#FF963C] p-3 md:p-4 w-[200px] md:w-[296px] h-[40px] md:h-[56px] rounded-md text-[14px] md:text-[18px] text-white text-center cursor-pointer"
        >
          記録をもっと見る
        </div>
      </div>
    </div>
  );
};

export default ColumnPage;
