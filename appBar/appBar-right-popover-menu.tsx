"use strict";

import * as React from 'react';
import i18n from "i18next";
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBarButton from "@/view/appBar/resource/appBarButton";
import LightThemeSvg from "@/view/appBar/resource/lightTheme-svg";
import DarkThemeSvg from "@/view/appBar/resource/lightTheme-svg";
import LanguageSvg from "@/view/appBar/resource/language-svg";
import { ThemeProvider } from '@mui/material/styles';
import { RightPopoverMenuProps } from '@/view/appBar/interface/componentProps';
import { 
    RightStyledMenu, 
    lightThemeRightStyledMenu, 
    darkThemeRightStyledMenu 
} from "@/component/MenuThemeComponent";

export default function RightPopoverMenu(props: RightPopoverMenuProps) {

    const {
        themes,
        anchorElRight,        
        openRight,        
        handleCloseRight,
        handleClickOpenSwitchThemeView,
        handleClickOpenSwitchLanguageView,
        handleClickOpenUserSettingMenu,
        setBottoms
    } = props;

    const dividerStyle = { 
        my: 0.5, 
        backgroundColor: themes === "themeLight" ? "#ffffff" : "#2a4561", 
        marginTop: "0px !important", 
        marginBottom: "0px !important"
    }

    const theme = themes === "themeLight" ? lightThemeRightStyledMenu : darkThemeRightStyledMenu;
    
    return (
        <ThemeProvider theme={theme}>
            <RightStyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorElRight}
                open={openRight}
                onClose={handleCloseRight}
            >
                <MenuItem 
                    onClick={ event => {
                        handleClickOpenSwitchThemeView(event);
                        setBottoms("not");
                    }} 
                    disableRipple
                >
                    <AppBarButton 
                        theme={themes} 
                        svg={ themes === "themeLight" ? LightThemeSvg : DarkThemeSvg } 
                        popover={true}
                    />
                    {i18n.t("switch.theme")}
                </MenuItem>

                <Divider 
                    sx={dividerStyle} 
                />

                <MenuItem 
                    onClick={ event => {
                        handleClickOpenSwitchLanguageView(event);
                        setBottoms("not");
                    }} 
                    disableRipple
                >
                    <AppBarButton theme={themes} svg={LanguageSvg} popover={true}/>
                    {i18n.t("switch.language")}
                </MenuItem>

                <Divider 
                    sx={dividerStyle} 
                />

                <MenuItem 
                    onClick={ event => {
                        handleClickOpenUserSettingMenu(event);
                        setBottoms("not");
                    }} 
                    disableRipple
                >
                    <AccountCircle />
                    {i18n.t("user.setting")}
                </MenuItem> 

            </RightStyledMenu>
        </ThemeProvider>
    );
};