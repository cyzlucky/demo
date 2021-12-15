"use strict";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import i18n from "i18next";
import NempLogo from "@/component/nemp-logo";
import ThemeLogoSvg from "@/component/svg/themeLogoSvg";
import LeftMenu from '@/view/appBar/appBar-left-menu';
import RightMenu from '@/view/appBar/appBar-right-menu';
import { AppBarMenuProps } from '@/view/appBar/interface/componentProps';

export default function AppBarMenu(props: AppBarMenuProps) {

    const {
        themes,
        mobileMenuId,
        currentUsername,
        menuId,
        atThis,
        permissionObjs,
        handleMobileMenuOpen,        
        handleClickRightOpen,
        setBottoms,
        setAtThis,
        handleClickOpenSwitchThemeView,
        handleClickOpenSwitchLanguageView,
        handleClickOpenUserSettingMenu,
    } = props;

    return (
        <AppBar position="static" className={"nemp-" + themes + "-Menu-appBar"}>
            <Toolbar className={"nemp-Menu-toolBar"}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center", marginRight: '20px'}} >
                    <div className={"nemp-title"}>
                        <NempLogo svg={ThemeLogoSvg} theme={themes}/>
                        <div className={"nemp-title-font"}>
                            {i18n.t("title")}
                        </div>
                    </div>
                </Box>

                <LeftMenu 
                    themes={themes} 
                    atThis={atThis} 
                    setAtThis={setAtThis}
                    permissionObjs={permissionObjs}
                />

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"                            
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>                
                 
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: "center", marginRight: '20px'}} >
                    <div className={"nemp-title"}>
                        <NempLogo svg={ThemeLogoSvg} theme={themes}/>
                        <div className={"nemp-title-font"}>
                            {i18n.t("title")}
                        </div>
                    </div>
                </Box>
                <Box sx={{ flexGrow: 1 }} />

                <RightMenu 
                    themes={themes}                    
                    currentUsername={currentUsername}
                    menuId={menuId}
                    handleClickOpenSwitchThemeView={handleClickOpenSwitchThemeView}
                    handleClickOpenSwitchLanguageView={handleClickOpenSwitchLanguageView}
                    handleClickOpenUserSettingMenu={handleClickOpenUserSettingMenu}
                    setBottoms={setBottoms}
                />

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"                            
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleClickRightOpen}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                </Box>                    

            </Toolbar>
        </AppBar>
    );
};