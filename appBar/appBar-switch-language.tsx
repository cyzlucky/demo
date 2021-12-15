"use strict";

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import store from "store";
import Divider from '@mui/material/Divider';
import { switchLanguage } from "../../config/i18ns.js";
import { ThemeProvider } from '@mui/material/styles';
import { SwitchLanguageProps } from '@/view/appBar/interface/componentProps';
import { 
    SwitchMenuComponent, 
    lightThemeSwitchComponent, 
    darkThemeSwitchComponent 
} from "@/component/MenuThemeComponent";

export default function SwitchLanguage(props: SwitchLanguageProps) {

    const {
        switchThemeButtonAnchorEl,
        openSwitchThemeView,
        handleCloseSwitchThemeView,
        themes,
        bottoms
    } = props;

    const currentLanguage = store.get('i18nextLng');

    const handleSwitchLanguageZhCn = () => {
        switchLanguage("zh-CN");
        location.reload();
    };
    
    const handleSwitchLanguageEnUs = () => {
        switchLanguage("en-US");
        location.reload();
    };

    const dividerStyle = { 
        my: 0.5, 
        backgroundColor: themes === "themeLight" ? "#ffffff" : "#2a4561", 
        marginTop: "0px !important", 
        marginBottom: "0px !important"
    }

    const theme = themes === "themeLight" ? lightThemeSwitchComponent : darkThemeSwitchComponent

    return (
        <ThemeProvider theme={theme}>
            <SwitchMenuComponent
                id="switchLanguage"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={switchThemeButtonAnchorEl}
                open={openSwitchThemeView}
                onClose={handleCloseSwitchThemeView}
                bottoms={bottoms}
            >
                <MenuItem 
                    onClick={handleSwitchLanguageZhCn} 
                    disableRipple
                    selected={currentLanguage === "zh-CN"}
                >                
                    简体中文
                </MenuItem>

                <Divider 
                    sx={dividerStyle} 
                />

                <MenuItem 
                    onClick={handleSwitchLanguageEnUs} 
                    disableRipple
                    selected={currentLanguage === "en-US"}
                >                
                    English
                </MenuItem>
            </SwitchMenuComponent>
        </ThemeProvider>
    );
};