import { useState, useEffect } from "react";
import classNames from "classnames";
import { Twirl as Hamburger } from "hamburger-react";
import { useSelector, useDispatch } from "react-redux";
import * as actionsCommon from "../../redux/actions/common";

import Container from "../Container";
import SocialList from "../SocialList/SocialList";
import Logo from "../Logo";
import ClockwiseButton from "../Buttons/ClockwiseButton";
import TableDropdown from "../Menus/TableDropdown";
import MainMenu from "../Menus/MainMenu";

import { useWindowSize } from "../../hooks/useWindowSize";
import { endpoints } from "../../constants/endpoints";

import styles from "../../styles/components/Headers/Header.module.scss";

import logout from "../../public/img/logout.svg";

export default function Header() {
  const dispatch = useDispatch();

  const type = useSelector((state) => state.common.currentType);

  const [isOpen, setOpen] = useState(false);
  const [innerWidth, innerHeight] = useWindowSize();

  const headerClasses = classNames(styles.header);

  const hamClickHandler = () => {
    document.body.style.overflow = !isOpen ? "hidden" : "visible";
    setOpen(!isOpen);
  };

  useEffect(() => {
    const setMenu = () => dispatch(actionsCommon.setMenu(isOpen));
    setMenu();
  }, [isOpen]);

  return (
    <header className={headerClasses}>
      <Container type="fluid">
        <div className={styles.header__row}>
          {innerWidth <= endpoints.md && innerWidth > endpoints.xs && (
            <button onClick={hamClickHandler} className={styles.header__ham}>
              <Hamburger direction="right" toggled={isOpen} size={24} />
            </button>
          )}
          <div className={styles.header__column_logo}>
            <Logo />
          </div>
          {innerWidth > endpoints.md && (
            <div className={styles.header__column_menu}>
              <MainMenu />
            </div>
          )}

          <div className={styles.header__column_contacts}>
            <div className={styles.header__contacts}>
              <SocialList />
              {innerWidth > endpoints.xs && (
                <>
                  {type === "connect" ? (
                    <ClockwiseButton
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      connect wallet
                    </ClockwiseButton>
                  ) : (
                    <ClockwiseButton
                      icon={logout}
                      alt="Logout"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Soon
                    </ClockwiseButton>
                  )}
                </>
              )}
            </div>
          </div>

          {innerWidth <= endpoints.xs && (
            <button onClick={hamClickHandler} className={styles.header__ham}>
              <Hamburger direction="left" toggled={isOpen} size={24} />
            </button>
          )}
        </div>
      </Container>

      {innerWidth <= endpoints.md && (
        <TableDropdown toggled={isOpen} close={hamClickHandler} />
      )}
    </header>
  );
}
