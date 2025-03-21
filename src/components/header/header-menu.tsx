"use client";

import { Popup, MouseDownOutsideEvent } from "@progress/kendo-react-popup";
import { Button, ButtonHandle } from "@progress/kendo-react-buttons";
import { useRef, useState } from "react";
import { Link } from "waku";
import { titles } from "@/src/constants/titles";
import { SvgIcon } from "@progress/kendo-react-common";
import { menuIcon } from "@progress/kendo-svg-icons";

export default function HeaderMenu() {
  const anchor = useRef<ButtonHandle | null>(null);
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow((s) => !s);
  };
  const hidePopup = (e: MouseDownOutsideEvent) => {
    if (e.isAnchorClicked) {
      return;
    }
    setShow(false);
  };
  const onLinkClicked = () => {
    setShow(false);
  };

  return (
    <div>
      <Button type="button" onClick={onClick} ref={anchor}>
        <SvgIcon icon={menuIcon} />
      </Button>
      <Popup
        anchor={anchor.current && anchor.current.element}
        show={show}
        popupClass={"popup-content"}
        onMouseDownOutside={hidePopup}
      >
        <div className="flex flex-col gap-1">
          <Link to="/" onClick={onLinkClicked}>
            {titles.home.replace(/\+/g, " ")}
          </Link>
          <Link to={`/coins?title=${titles.coinsList}`} onClick={onLinkClicked}>
            {titles.coinsList.replace(/\+/g, " ")}
          </Link>
          <Link
            to={`/coin-search?title=${titles.coinsSearch}`}
            onClick={onLinkClicked}
          >
            {titles.coinsSearch.replace(/\+/g, " ")}
          </Link>
        </div>
      </Popup>
    </div>
  );
}
