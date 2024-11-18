import React, { useState } from "react";
import record1 from "@/assets/record/record1.png";
import record2 from "@/assets/record/record2.png";
import record3 from "@/assets/record/record3.png";
import LineChart from "../CommonPage/LineChart";

interface RecordItemProps {
  title: string;
  subTitle: string;
  img: string;
}

interface ExerciseItemProps {
  calories: string;
  duration: string;
}

const RecordItem: React.FC<RecordItemProps> = ({ title, subTitle, img }) => (
  <div className="w-[288px] h-[288px] border-[24px] border-solid border-[#FFCC21] relative flex justify-center items-center">
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="min-w-[240px] h-[240px] grayscale bg-[#434343]"
    ></div>
    <div className="absolute flex flex-col gap-2 items-center">
      <div className="font-[400] text-[25px] text-[#FFCC21] text-center">
        {title}
      </div>
      <div className="font-[300] text-[14px] text-white w-[160px] h-6 bg-[#FF963C] text-center">
        {subTitle}
      </div>
    </div>
  </div>
);

const ExerciseItem: React.FC<ExerciseItemProps> = ({ calories, duration }) => (
  <div className="w-full">
    <div className="flex flex-row justify-between w-[416px]">
      <div className="flex flex-row gap-2">
        <div className="font-[300] text-[10px] text-white mt-[3px]">●</div>
        <div className="flex flex-col text-[15px]">
          <div className="font-[300] text-white">家事全般（立位・軽い）</div>
          <div className="font-[400] text-[#FFCC21]">{calories}</div>
        </div>
      </div>
      <div className="font-[400] text-[18px] text-[#FFCC21]">{duration}</div>
    </div>
    <div className="h-[2px] bg-[#777777] mt-1 w-[416px]"></div>
  </div>
);

const Record: React.FC = () => {
  const recordList: RecordItemProps[] = [
    { title: "BODY RECORD", subTitle: "自分のカラダの記録", img: record1 },
    { title: "MY EXERCISE", subTitle: "自分の運動の記録", img: record2 },
    { title: "MY DIARY", subTitle: "自分の日記", img: record3 },
  ];

  const itemChart = ["日", "週", "月", "年"];
  const [btnActive, setBtnActive] = useState<number>(3);
  const [itemData, setItemData] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);

  const loadMoreItemData = () => {
    setItemData((prevData) => [...prevData, 1, 1, 1, 1]);
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] home-page w-full justify-center items-center">
      <div className="flex flex-row gap-10 w-[960px] py-12">
        {recordList.map((record, index) => (
          <RecordItem key={index} {...record} />
        ))}
      </div>

      <div className="flex flex-col gap-2 bg-[#2E2E2E] w-[960px]">
        <div className="flex flex-row gap-14 mx-6 pt-4">
          <div className="text-[15px] w-10 font-[400] text-white">BODY RECORD</div>
          <div className="text-[22px] font-[400] text-white">2021.05.21</div>
        </div>
        <div className="flex justify-center h-80 w-full bg-[#2E2E2E]">
          <div className="w-[90%]">
            <LineChart
              data1={[66, 58, 53, 48, 41, 36, 32, 27, 25, 21, 17, 15]}
              data2={[66, 63, 42, 59, 53, 46, 56, 51, 45, 38, 32, 21]}
              maintainAspectRatio={false}
            />
          </div>
        </div>
        <div className="flex flex-row gap-10 mx-10 py-3">
          {itemChart.map((label, index) => (
            <div
              key={index}
              className={`cursor-pointer text-[15px] w-14 h-6 font-[300] text-[#FFCC21] bg-white rounded-xl flex justify-center ${
                btnActive === index && "!text-white !bg-[#FFCC21]"
              }`}
              onClick={() => setBtnActive(index)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-[#2E2E2E] w-[960px] mt-12">
        <div className="flex flex-row gap-14 mx-6 pt-4">
          <div className="text-[15px] w-12 font-[400] text-white">MY EXERCISE</div>
          <div className="text-[22px] font-[400] text-white">2021.05.21</div>
        </div>
        <div className="flex flex-col gap-4 w-[940px] h-[315px] overflow-auto py-4">
          {itemData.map((_, index) => (
            <div key={index} className="flex flex-row gap-10 mx-5">
              <ExerciseItem calories="26kcal" duration="10 min" />
              <ExerciseItem calories="26kcal" duration="10 min" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 w-[960px] mt-12">
        <div className="text-[22px] w-full font-[400] text-[#414141]">
          MY DIARY
        </div>
        <div className="grid grid-cols-4 gap-4">
          {itemData.map(() => {
            return (
              <div className="w-[231px] h-[231px] border-solid text-[#414141] p-[15px] border-[2px] border-[#707070]">
                <div className="font-[400] text-[18px]">2021.05.21</div>
                <div className="font-[400] text-[18px]">23:25</div>
                <div className="font-[300] text-[12px] line-clamp-2 mt-4">
                  私の日記の記録が一部表示されます。
                </div>
                <div className="font-[300] text-[12px] line-clamp-5">
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-6 pb-16 w-full flex justify-center">
        <div
          className="bg-gradient-to-t from-[#FFCC21] to-[#FF963C] p-4 w-[296px] h-[56px] rounded-md text-[18px] text-white text-center cursor-pointer"
          onClick={loadMoreItemData}
        >
          自分の日記をもっと見る
        </div>
      </div>
    </div>
  );
};

export default Record;
