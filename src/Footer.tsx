import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <footer>
      <h4>
        <span>Copyright &#169; {currentYear} SolQueens</span>
      </h4>
    </footer>
  );
}
