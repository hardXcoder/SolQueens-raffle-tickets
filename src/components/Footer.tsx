import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../img/logo.svg";
import twiiter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";
import mail from "../img/mail.svg";
import github from "../img/github.svg";
import discord from "../img/discord.svg";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <footer>
      <div className="socialContainer gap-5">
        <a href="https://twitter.com/SolQueens_NFT">
          <img src={twiiter} />
        </a>

        <a href="https://discord.gg/nTxh4rcrgs">
          <img src={discord} />
        </a>

        {/* <img src={linkedin} /> */}
        {/* <img src={github} /> */}
        {/* <img src={mail} /> */}
      </div>

      {/* <img src={logo} /> */}
      <h3 className="logo">SolQueens</h3>

      <h4>
        <span>Copyright &#169; {currentYear} SolQueens</span>
      </h4>
    </footer>
  );
}
