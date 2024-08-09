import React from "react";

import { Icon } from "../Icon/Icon";

function Footer() {
  
  const currentYear = new Date().getFullYear();
  const {linkedin, github, copyrighttext} = process.env;

  return (
    <>
      <footer className="text-slate-500 text-center">
        <div className="my-4 text-center">
          <ul className="flex flex-wrap lg:flex justify-center ">
            <li className="px-2"> SIGA-ME: </li>
            <li className="px-2 capitalize border-1  hover:border-b-white">
              <a target="_blank" className="" href={github}>
                <Icon icon="Github" />
              </a>
            </li>
            <li className="px-2 capitalize border-1  hover:border-b-white">
              <a target="_blank" className="" href={linkedin}>
                <Icon icon="Linkedin" />
              </a>
            </li>

          
          </ul>
        </div>
        <div className="">
          <p
            className=""
            dangerouslySetInnerHTML={{
              __html: `Copyright © ${currentYear} | ${copyrighttext}`,
            }}
          ></p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
