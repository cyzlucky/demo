"use strict";

import * as React from 'react';
import i18n from "i18next";
import MenuItem from '@mui/material/MenuItem';
import store from "store";
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { UserSettingProps } from '@/view/appBar/interface/componentProps';
import { 
    SwitchMenuComponent, 
    lightThemeSwitchComponent, 
    darkThemeSwitchComponent 
} from "@/component/MenuThemeComponent";

export default function UserSetting(props: UserSettingProps) {

    const {
        switchThemeButtonAnchorEl,
        openSwitchThemeView,
        handleCloseSwitchThemeView,
        themes,
        handleClickOpenChangePasswordDiaLog,
        bottoms,
    } = props;

    const handleSignOut = () => {        
        store.remove('nemp-token');
        store.remove('ps');
    };

    const handleChangePassword = () => {
        handleClickOpenChangePasswordDiaLog();
        handleCloseSwitchThemeView();        
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
                    onClick={handleChangePassword}
                    disableRipple                    
                >                
                    { i18n.t("user.change.password") }
                </MenuItem> 

                <Divider 
                    sx={dividerStyle} 
                />

                <RouterLink to={"/login"} className={themes + "-menu-a-tag"}>
                    <MenuItem 
                        onClick={handleSignOut}
                        disableRipple                    
                    >                
                        <LogoutIcon 
                            sx={{ 
                                color: themes === "themeLight" ? 
                                    "#404040 !important" : 
                                    "#ffffff !important",
                            }}
                        />
                        { i18n.t("user.setting.sign.out") }
                    </MenuItem>                
                </RouterLink>
            </SwitchMenuComponent>
        </ThemeProvider>
    );
};