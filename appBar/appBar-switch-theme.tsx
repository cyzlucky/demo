"use strict";

import * as React from 'react';
import i18n from "i18next";
import MenuItem from '@mui/material/MenuItem';
import store from "store";
import Divider from '@mui/material/Divider';
import AppBarButton from "@/view/appBar/resource/appBarButton";
import LightThemeSvg from "@/view/appBar/resource/theme-svg";
import DarkThemeSvg from "@/view/appBar/resource/lightTheme-svg";
import { ThemeProvider } from '@mui/material/styles';
import { SwitchThemeProps } from '@/view/appBar/interface/componentProps';
import { 
    SwitchMenuComponent, 
    lightThemeSwitchComponent, 
    darkThemeSwitchComponent 
} from "@/component/MenuThemeComponent";

export default function SwitchTheme(props: SwitchThemeProps) {

    const {
        switchThemeButtonAnchorEl,
        openSwitchThemeView,
        handleCloseSwitchThemeView,
        themes,
        bottoms,
    } = props;

    const handleSwitchLightTheme = () => {
        store.set('nemp_theme', { nemp_themes:  "themeLight"});
        location.reload();
    };
    
    const handleSwitchDarkTheme = () => {
        store.set('nemp_theme', { nemp_themes:  "themeDark"});
        location.reload();
    };

    const dividerStyle = { 
        my: 0.5, 
        backgroundColor: themes === "themeLight" ? "#ffffff" : "#2a4561", 
        marginTop: "0px !important", 
        marginBottom: "0px !important"
    }

    const theme = themes === "themeLight" ? lightThemeSwitchComponent : darkThemeSwitchComponent;

    return (
        <ThemeProvider theme={theme}>
            <SwitchMenuComponent
                id="switchTheme"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={switchThemeButtonAnchorEl}
                open={openSwitchThemeView}
                onClose={handleCloseSwitchThemeView}
                bottoms={bottoms}
            >
                <MenuItem 
                    onClick={handleSwitchLightTheme} 
                    disableRipple
                    selected={themes === "themeLight"}
                >                
                    <AppBarButton theme={themes} svg={ DarkThemeSvg } popover={true}/>
                    { i18n.t("theme.light") }
                </MenuItem>

                <Divider 
                    sx={dividerStyle} 
                />
                
                <MenuItem 
                    onClick={handleSwitchDarkTheme} 
                    disableRipple
                    selected={themes === "themeDark"}
                >                
                    <AppBarButton theme={themes} svg={ LightThemeSvg } popover={true}/>
                    { i18n.t("theme.dark") }
                </MenuItem>
            </SwitchMenuComponent>
        </ThemeProvider>
    );
};