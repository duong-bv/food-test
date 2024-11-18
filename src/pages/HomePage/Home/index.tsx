import dinner from "@/assets/myPage/dinner.png";
import item1 from "@/assets/myPage/item1.png";
import item2 from "@/assets/myPage/item2.png";
import item3 from "@/assets/myPage/item3.png";
import item4 from "@/assets/myPage/item4.png";
import item5 from "@/assets/myPage/item5.png";
import item6 from "@/assets/myPage/item6.png";
import item7 from "@/assets/myPage/item7.png";
import lunch from "@/assets/myPage/lunch.png";
import mainPhoto from "@/assets/myPage/main_photo.png";
import morning from "@/assets/myPage/morning.png";
import snack from "@/assets/myPage/snack.png";

import { IconCircle } from "@/assets/icons/icons";
import { default as React, useState } from "react";
import LineChart from "../../CommonPage/LineChart";

const HomePage: React.FC = () => {
  const [itemMore, setItemMore] = useState<any[]>([]);
  const itemLists1 = [
    { title: "05.21.Morning", img: item1 },
    { title: "05.21.Lunch", img: item2 },
    { title: "05.21.Dinner", img: item3 },
    { title: "05.21.Snack", img: item4 },
  ];

  const itemLists2 = [
    { title: "05.20.Morning", img: item1 },
    { title: "05.20.Lunch", img: item5 },
    { title: "05.20.Dinner", img: item6 },
    { title: "05.21.Snack", img: item7 },
  ];

  const itemIcons = [morning, lunch, dinner, snack];

  const loadMoreData = () => {
    let data = [...itemMore];
    data = [...data, ...itemLists1];
    setItemMore(data);
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] home-page w-full">
      <div className="flex flex-col md:flex-row gap-4 bg-[#2E2E2E]">
        <div
          style={{ backgroundImage: `url(${mainPhoto})` }}
          className="w-full md:min-w-[540px] h-[200px] md:h-[312px] flex justify-center items-center bg-cover bg-center"
        >
          <IconCircle />
        </div>
        <div className="w-full bg-[#2E2E2E] p-3 h-[200px] md:h-[312px]">
        <LineChart
          data1={[23, 41, 56, 78, 90, 123, 107, 89, 45, 67, 54, 32]} // Dữ liệu ngẫu nhiên 1
          data2={[18, 33, 52, 65, 77, 92, 110, 98, 55, 72, 60, 47]} // Dữ liệu ngẫu nhiên 2
          maintainAspectRatio={false}
        />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 md:gap-16 py-4 md:py-8 flex-wrap">
        {itemIcons.map((e, index) => (
          <img
            key={index}
            src={e}
            className="w-[80px] h-[80px] md:w-[136px] md:h-[136px] object-contain"
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap justify-center gap-2 w-full">
          {itemLists1.map((e, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${e.img})` }}
              className="flex flex-col justify-end items-start w-[150px] h-[150px] md:w-[234px] md:h-[234px] bg-cover bg-center"
            >
              <div className="flex font-[400] text-[12px] md:text-[15px] text-white bg-[#FFCC21] w-[90px] md:w-[120px] h-[24px] md:h-[32px] items-center px-2">
                {e.title}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 w-full max-w-[960px]">
          {itemLists2.map((e, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${e.img})` }}
              className="flex flex-col justify-end items-start w-[150px] h-[150px] md:w-[234px] md:h-[234px] bg-cover bg-center"
            >
              <div className="flex font-[400] text-[12px] md:text-[15px] text-white bg-[#FFCC21] w-[90px] md:w-[120px] h-[24px] md:h-[32px] items-center px-2">
                {e.title}
              </div>
            </div>
          ))}
        </div>
        {itemMore?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 w-full max-w-[960px]">
            {itemMore.map((e, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${e.img})` }}
                className="flex flex-col justify-end items-start w-[150px] h-[150px] md:w-[234px] md:h-[234px] bg-cover bg-center"
              >
                <div className="flex font-[400] text-[12px] md:text-[15px] text-white bg-[#FFCC21] w-[90px] md:w-[120px] h-[24px] md:h-[32px] items-center px-2">
                  {e.title}
                </div>
              </div>
            ))}
          </div>
        )}
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

export default HomePage;
