import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/Dronut.png";
import { TextField, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

interface MenuHeaderProps {
  setAddress: React.Dispatch<React.SetStateAction<any>>;
}

function MenuHeader(props: MenuHeaderProps) {
  const { setAddress } = props;

  const [tmpAddress, setTmpAddress] = useState("");

  return (
    <div className="Header">
      {false && (
        <div className="address">
          <EditIcon className="editIcon" />
          <div>
            <TextField
              hiddenLabel
              variant="standard"
              value={tmpAddress}
              placeholder="Enter Delivery Addresss"
              onChange={(event) => {
                setTmpAddress(event.target.value);
              }}
            />
          </div>
          <IconButton
            className="iconButton"
            onClick={() => setAddress(tmpAddress)}
          >
            <CheckIcon className="icon" />
          </IconButton>
        </div>
      )}
      <img className="logo" src={logo} />
    </div>
  );
}

export default MenuHeader;
