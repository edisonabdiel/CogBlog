import React, { FC } from "react";
//Icons
import { GiRooster } from "react-icons/gi";
import { FaGithubAlt } from "react-icons/fa";

const Footer: FC<any> = () => (
    <div className="container mx-auto mb-6 inline-block align-top">
      <div className="flex justify-center text-3xl pb-2">
        <GiRooster />
      </div>
      <div className="text-center text-sm text-gray-200 font-thin">
        <h4>Developed with ❤️‍🔥 EdisonAbdiel™</h4>
        <div className="float-right py-4 cursor-pointer hover:text-purple-400 hover:scale-150 hover:-translate-y-1 text-2xl transition ease-in-out duration-700">
          <a target="_blank" href="https://github.com/edisonabdiel/CogBlog" rel="noopener noreferrer">
            <FaGithubAlt />
          </a>
        </div>
      </div>
    </div>
  );

export default Footer;
