import clsx from "clsx";
import styles from "./SassModuleDemo.module.scss";

export const SassModuleButton = ({type, children, theme}) => {

    // type can be "primary", "secondary", "tertiary"

    return (
        <button className={clsx(styles.button, styles[type], "custom" )}>{children}</button>
    )
};