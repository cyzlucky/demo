"use strict";

import * as React from 'react';
import i18n from "i18next";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AppBarButton from "@/view/appBar/resource/appBarButton";
import LightThemeSvg from "@/view/appBar/resource/theme-svg";
import DarkThemeSvg from "@/view/appBar/resource/lightTheme-svg";
import LanguageSvg from "@/view/appBar/resource/language-svg";
import Avatar from '@mui/material/Avatar';
import { ThemeProvider } from '@mui/material/styles';
import { RightMenuProps } from "@/view/appBar/interface/componentProps";
import { 
    MenuButtonTooltip, 
    lightThemeMenuButtonTooltip, 
    darkThemeMenuButtonTooltip 
} from "@/component/MenuThemeComponent";

export default function RightMenu(props: RightMenuProps) {

    const {
        themes,        
        currentUsername,
        handleClickOpenSwitchThemeView,
        handleClickOpenSwitchLanguageView,
        handleClickOpenUserSettingMenu,
        setBottoms,
        menuId
    } = props;

    const reg = /^./;
    let fontPoto = reg.exec(currentUsername)[0].toUpperCase();

    const theme = themes === "themeLight" ? lightThemeMenuButtonTooltip : darkThemeMenuButtonTooltip;

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuButtonTooltip title={i18n.t("switch.theme")}>
                    <IconButton 
                        size="large"                             
                        color="inherit"
                        sx={{ marginRight: '5px', width: "48px", height: "48px"}}
                        onClick={ event => {
                            handleClickOpenSwitchThemeView(event);
                            setBottoms("bottom");
                        }}
                    >
                        <AppBarButton theme={themes} svg={themes === "themeLight" ? LightThemeSvg : DarkThemeSvg}/>
                    </IconButton>
                </ MenuButtonTooltip>

                <MenuButtonTooltip title={i18n.t("switch.language")}>
                    <IconButton
                        size="large"                            
                        color="inherit"
                        sx={{ marginRight: '5px', width: "48px", height: "48px" }}
                        onClick={ event => {
                            handleClickOpenSwitchLanguageView(event);
                            setBottoms("bottom");
                        }}
                    >
                        <AppBarButton theme={themes} svg={LanguageSvg} name={"rightLanguageSvg"}/>
                    </IconButton>
                </ MenuButtonTooltip>
                
                <MenuButtonTooltip title={i18n.t("user.setting")}>
                    <IconButton
                        size="large"
                        edge="end"                            
                        aria-controls={menuId}
                        aria-haspopup="true"                
                        color="inherit"
                        sx={{ marginRight: '5px', width: "48px", height: "48px" }}
                        onClick={event => {
                            handleClickOpenUserSettingMenu(event);
                            setBottoms("bottom");
                        }}
                    >
                        <Avatar sx={{ bgcolor: "#1b6cff", width: 28, height: 28,}}>{ fontPoto }</Avatar>
                    </IconButton>
                </ MenuButtonTooltip>

            </Box>
        </ThemeProvider>
    );
};