import clsx from "clsx";
import React from "react";
import "./appBar.scss";

export default function (props) {

    const { theme, name, popover, leftPopover, atThis } = props;

    let workOrderSvgSizeMerage = false;
    let logSvgSizeMerage = false;
    let alertSvgSizeMerage = false;
    let settingSvgSizeMerage = false;
    let rightLanguageSvg = false;

    if (name === "workOrderSvg") {
        workOrderSvgSizeMerage = true;
    } else if (name === "logSvg") {
        logSvgSizeMerage = true;
    } else if (name === "alertSvg") {
        alertSvgSizeMerage = true;
    } else if (name === "settingSvg") {
        settingSvgSizeMerage = true;
    } else if (name === "rightLanguageSvg") {
        rightLanguageSvg = true;
    }

    return(
        <div 
            className={
                clsx( 
                    "nemp-appBar-button", 
                    workOrderSvgSizeMerage && "nemp-min-appBar-buttom",
                    logSvgSizeMerage && "nemp-appBar-buttom-logSvg",
                    alertSvgSizeMerage && "nemp-appBar-buttom-alertSvg",
                    settingSvgSizeMerage && "nemp-appBar-buttom-settingSvg",
                    popover && "nemp-appBar-buttom-popover",
                    leftPopover && "nemp-appBar-buttom-leftPopover",  
                    rightLanguageSvg && "nemp-appBar-buttom-rightLanguageSvg"                  
                )
            }
        >
            <props.svg theme={theme} atThis={atThis}/>
        </div>
    );
}