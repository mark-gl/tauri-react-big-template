import { WindowsControls } from "./WindowsControls";
import styles from "./WindowsMenuBar.module.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { goBack, goForward } from "redux-first-history";
import LeftArrow from "../../../assets/arrow-left-solid.svg?react";
import RightArrow from "../../../assets/arrow-right-solid.svg?react";
import { MenuButton } from "../../MenuButton";
import { selectMenuState } from "../../../app/menu";
import { WindowsMenuBarButtons } from "./WindowsMenuBarButtons";
import { useContext } from "react";
import { PlatformContext } from "../../../contexts/PlatformContext";
import { useTranslation } from "react-i18next";

export function WindowsMenuBar() {
  const { t } = useTranslation();
  const { fullscreen, decorations } = useContext(PlatformContext);

  const dispatch = useAppDispatch();
  const menuState = useAppSelector(selectMenuState);
  const backEnabled = !menuState.back?.disabled;
  const forwardEnabled = !menuState.forward?.disabled;

  return (
    <div
      className={`${styles.menuBar} ${
        decorations ? `${styles.menuBarSmall}` : ""
      }`}
    >
      <div className={styles.navigationShort}>
        <MenuButton />
        <LeftArrow
          title={t("labels.back")}
          className={`${styles.arrow} ${
            backEnabled ? "" : `${styles.arrowDisabled}`
          }`}
          onClick={() => {
            if (backEnabled) dispatch(goBack());
          }}
        />
        <RightArrow
          title={t("labels.forward")}
          className={`${styles.arrow} ${
            forwardEnabled ? "" : `${styles.arrowDisabled}`
          }`}
          onClick={() => {
            if (forwardEnabled) dispatch(goForward());
          }}
        />
      </div>
      <div className={styles.navigationLong}>
        <WindowsMenuBarButtons />
      </div>
      {fullscreen === false && decorations === false && (
        <div className={styles.dragRegion} data-tauri-drag-region></div>
      )}
      {fullscreen === false && decorations === false && <WindowsControls />}
    </div>
  );
}
