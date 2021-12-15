"use strict";

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import store from "store";
import LeftPopoverMenu from '@/view/appBar/appBar-left-popover-menu';
import AppBarMenu from '@/view/appBar/appBar-menu';
import RightPopoverMenu from '@/view/appBar/appBar-right-popover-menu';
import SwitchTheme from '@/view/appBar/appBar-switch-theme';
import SwitchLanguage from '@/view/appBar/appBar-switch-language';
import UserSetting from '@/view/appBar/appBar-user-setting';
import { useLocation } from 'react-router-dom';
import { getPermissionObjs } from "@/component/nempLocalData";
import FormDialog from '@/view/appBar/changePassword';
import { useForm } from "react-hook-form";
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import { ThemeProvider } from '@mui/material/styles';
import { CenterSnackbar, CenterSnackbarTheme } from "@/component/MenuThemeComponent";
import { AppBarComponentProps } from '@/view/appBar/interface/componentProps';

const Alert = React.forwardRef(function Alert(props:any, ref:any) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AppBarComponent(props: AppBarComponentProps) {

    const { themes } = props;         
    const location = useLocation();
    const uris = location.pathname.split("/");
    const currentUsername: string = store.get("username");
    const [bottoms, setBottoms] = React.useState("bottom");
    const [atThis, setAtThis] = React.useState(uris[2]);             
    const [upDatePermissionObjs, setUpDatePermissionObjs] = React.useState(1); 
    const [version, setVersion] = React.useState(1);    
    const [permissionObjs, setPermissionObjs] = React.useState<any>();
    useEffect(() => {
        if (uris[1] !== 'login') {
            getPermissionObjs(setPermissionObjs, version);        
            setVersion(version + 1);
        }
    }, [upDatePermissionObjs]);

    const [userSettingAnchorEl, setUserSettingAnchorEl] = React.useState<null | HTMLElement>(null);
    const openUserSettingMenu = Boolean(userSettingAnchorEl);

    const handleClickOpenUserSettingMenu = (event: React.MouseEvent<HTMLElement>) => {        
        setUserSettingAnchorEl(event.currentTarget);
    };
    const handleCloseUserSettingMenu = () => {
        setAnchorElRight(null);
        setUserSettingAnchorEl(null);
    };

    const [switchLanguageButtonAnchorEl, setSwitchLanguageButtonAnchorEl] = React.useState<null | HTMLElement>(null);
    const openSwitchLanguageView = Boolean(switchLanguageButtonAnchorEl);

    const handleClickOpenSwitchLanguageView = (event: React.MouseEvent<HTMLElement>) => {
        setSwitchLanguageButtonAnchorEl(event.currentTarget);
    };
    const handleCloseSwitchLanguageView = () => {
        setAnchorElRight(null);
        setSwitchLanguageButtonAnchorEl(null);
    };

    const [switchThemeButtonAnchorEl, setSwitchThemeButtonAnchorEl] = React.useState<null | HTMLElement>(null);
    const openSwitchThemeView = Boolean(switchThemeButtonAnchorEl);

    const handleClickOpenSwitchThemeView = (event: React.MouseEvent<HTMLElement>) => {
        setSwitchThemeButtonAnchorEl(event.currentTarget);
    };
    const handleCloseSwitchThemeView = () => {
        setAnchorElRight(null);
        setSwitchThemeButtonAnchorEl(null);
    };

    const [anchorElRight, setAnchorElRight] = React.useState<null | HTMLElement>(null);    
    const openRight = Boolean(anchorElRight);

    const handleClickRightOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElRight(event.currentTarget);
    };
    const handleCloseRight = () => {
        setAnchorElRight(null);
    };

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);            
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);    

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {        
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [openChangePasswordDiaLog, setOpenChangePasswordDiaLog] = React.useState(false);

    const handleClickOpenChangePasswordDiaLog = () => {
        setOpenChangePasswordDiaLog(true);
    };

    const handleCloseChangePasswordDiaLog = () => {
        setOpenChangePasswordDiaLog(false);
    };

    const [values, setValues] = React.useState({        
        password: '',                
        showPassword: false,
    });

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const menuId = 'primary-search-account-menu';    
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const [openMessagesAlert, setOpenMessagesAlert] = React.useState(false);

    const [messages, setMessages] = React.useState({
        severity: "error",
        message: "error"
    });

    const handleMessages = (severity, message) => {
        setMessages({
            severity: severity,
            message: message,
        });
    };

    const {severity, message} = messages;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenMessagesAlert(false);
    };
    
    return (    
        <Box sx={{ flexGrow: 1, zIndex: 50, position: "relative"}} >
            {
                permissionObjs !== undefined ?
                <AppBarMenu 
                    themes={themes}
                    mobileMenuId={mobileMenuId}
                    handleMobileMenuOpen={handleMobileMenuOpen}                
                    handleClickRightOpen={handleClickRightOpen}
                    currentUsername={currentUsername}
                    menuId={menuId}
                    handleClickOpenSwitchThemeView={handleClickOpenSwitchThemeView}
                    handleClickOpenSwitchLanguageView={handleClickOpenSwitchLanguageView}
                    handleClickOpenUserSettingMenu={handleClickOpenUserSettingMenu}
                    setBottoms={setBottoms}
                    atThis={atThis}
                    setAtThis={setAtThis}
                    permissionObjs={permissionObjs}
                /> : <></>
            }

            {
                permissionObjs !== undefined ?
                <LeftPopoverMenu 
                    mobileMoreAnchorEl={mobileMoreAnchorEl}
                    mobileMenuId={mobileMenuId}
                    isMobileMenuOpen={isMobileMenuOpen}
                    handleMobileMenuClose={handleMobileMenuClose}
                    themes={themes}
                    permissionObjs={permissionObjs}
                    atThis={atThis}
                    setAtThis={setAtThis}
                /> : <></>
            }
                        
            <RightPopoverMenu 
                anchorElRight={anchorElRight}
                openRight={openRight}
                handleCloseRight={handleCloseRight}
                themes={themes}
                handleClickOpenSwitchThemeView={handleClickOpenSwitchThemeView}
                handleClickOpenSwitchLanguageView={handleClickOpenSwitchLanguageView}
                handleClickOpenUserSettingMenu={handleClickOpenUserSettingMenu}
                setBottoms={setBottoms}
            />

            <SwitchTheme 
                switchThemeButtonAnchorEl={switchThemeButtonAnchorEl}
                openSwitchThemeView={openSwitchThemeView}
                handleCloseSwitchThemeView={handleCloseSwitchThemeView}
                themes={themes}
                bottoms={bottoms}
            />

            <SwitchLanguage 
                switchThemeButtonAnchorEl={switchLanguageButtonAnchorEl}
                openSwitchThemeView={openSwitchLanguageView}
                handleCloseSwitchThemeView={handleCloseSwitchLanguageView}
                themes={themes}
                bottoms={bottoms}
            />

            <UserSetting 
                handleClickOpenChangePasswordDiaLog={handleClickOpenChangePasswordDiaLog}
                switchThemeButtonAnchorEl={userSettingAnchorEl}
                openSwitchThemeView={openUserSettingMenu}
                handleCloseSwitchThemeView={handleCloseUserSettingMenu}
                themes={themes}
                bottoms={bottoms}
            />

            <FormDialog 
                openChangePasswordDiaLog={openChangePasswordDiaLog}
                handleCloseChangePasswordDiaLog={handleCloseChangePasswordDiaLog}
                setValues={setValues} 
                values={values} 
                register={register} 
                errors={errors}       
                handleSubmit={handleSubmit}
                handleMessages={handleMessages}
                setOpenMessagesAlert={setOpenMessagesAlert}
            />

            <Stack spacing={2} sx={{ width: '100%' }}>
                <ThemeProvider  theme={CenterSnackbarTheme}> 
                    <CenterSnackbar 
                        open={openMessagesAlert} 
                        autoHideDuration={2000} 
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}                     
                        onClose={handleClose}
                        className={"centerSnackbar"}
                    >
                        <Alert onClose={handleClose} severity={ severity } sx={{ width: '100%' }}>
                            { message }
                        </Alert>
                    </CenterSnackbar>
                </ThemeProvider>
            </Stack>
        </Box>
    );
}