import { default as React } from "react";

const Footer: React.FC = () => {
  const footers = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱について",
    "特定商取引法に基づく表記",
    "お問い合わせ",
  ];
  return (
    <div className="flex flex-row bg-[#414141] py-4 h-[128px] gap-12 items-center px-40">
      {footers.map((e, index) => {
        return (
          <div key={index} className="font-[300] text-[11px] text-white cursor-pointer">
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
