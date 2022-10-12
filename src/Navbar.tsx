import React, { Component } from "react";

import "./App.css";
import styled from "styled-components";

import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

const ConnectButton = styled(WalletDialogButton)``;

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h2 className="navHeading">SolQueens Raffle</h2>

        <ConnectButton className="navConnectBtn">
          <b>Connect Wallet</b>
        </ConnectButton>
      </nav>
    );
  }
}
export default Navbar;
