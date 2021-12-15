"use strict";

import * as React from 'react';
import i18n from "i18next";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import AppBarButton from "@/view/appBar/resource/appBarButton";
import HomeSvg from "@/view/appBar/resource/home-svg";
import DeviceSvg from "@/view/appBar/resource/device-svg";
import AlertSvg from "@/view/appBar/resource/alert-svg";
import WorkOrderSvg from "@/view/appBar/resource/workOrder-svg";
import LogSvg from "@/view/appBar/resource/log-svg";
import SettingSvg from "@/view/appBar/resource/setting-svg";
import Divider from '@mui/material/Divider';
import { clearTimer } from '@/view/home/resource/chart-equipmentStatistics';
import { clearServerChartUpdateInterval } from '@/view/home/home-systemStatus';
import { ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { LeftPopoverMenuProps } from '@/view/appBar/interface/componentProps';
import { 
    LeftStyledMenu, 
    lightThemeLeftStyledMenu, 
    darkThemeLeftStyledMenu 
} from "@/component/MenuThemeComponent";

export default function LeftPopoverMenu(props: LeftPopoverMenuProps) {

    const { 
        mobileMoreAnchorEl, 
        mobileMenuId, 
        isMobileMenuOpen, 
        themes,   
        permissionObjs,   
        atThis,  
        setAtThis,
        handleMobileMenuClose,
    } = props;

    const dividerStyle = { 
        my: 0.5, 
        backgroundColor: themes === "themeLight" ? "#ffffff" : "#2a4561", 
        marginTop: "0px !important", 
        marginBottom: "0px !important"
    }

    const theme = themes === "themeLight" ? lightThemeLeftStyledMenu : darkThemeLeftStyledMenu;

    return (
        <ThemeProvider theme={theme}>
            <LeftStyledMenu                
                anchorEl={mobileMoreAnchorEl}                
                id={mobileMenuId}
                keepMounted                
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
                className={"nemp-" + themes + "-appBar-menu"}            
            >
                {
                    permissionObjs.view.home === 1 ?                     
                    <RouterLink to={"/nemp/home"} className={themes + "-menu-a-tag"}>
                        <MenuItem 
                              
                            onClick={()=>{
                                handleMobileMenuClose();
                                setAtThis('home');
                                clearTimer();
                                clearServerChartUpdateInterval();
                            }}
                            selected={atThis === "home"}
                        >
                            <IconButton 
                                size="large" 
                                color="inherit"
                                sx={{ width: "48px", height: "48px" }}
                            >
                                <AppBarButton 
                                    theme={themes} 
                                    svg={HomeSvg} 
                                    leftPopover={true}
                                />
                            </IconButton>
                            <p>{i18n.t("view.home")}</p>
                        </MenuItem>
                        <Divider 
                            sx={dividerStyle} 
                        />
                    </RouterLink> : ""
                }

                {
                    permissionObjs.view.device === 1 ?                     
                    <RouterLink to={"/nemp/device"} className={themes + "-menu-a-tag"}>
                        <MenuItem                               
                            onClick={()=>{
                                handleMobileMenuClose();
                                setAtThis('device');
                                clearTimer();
                                clearServerChartUpdateInterval();
                            }}
                            selected={atThis === "device"}
                        >
                            <IconButton
                                size="large"
                                color="inherit"
                                sx={{ width: "48px", height: "48px" }}
                            >
                                <AppBarButton 
                                    theme={themes} 
                                    svg={DeviceSvg} 
                                    leftPopover={true}
                                />
                            </IconButton>
                            <p>{i18n.t("view.device")}</p>
                        </MenuItem>
                        <Divider 
                            sx={dividerStyle} 
                        />
                    </RouterLink> : ""
                }
                
                {
                    permissionObjs.view.alert === 1 ?                     
                    <RouterLink to={"/nemp/alert"} className={themes + "-menu-a-tag"}>
                        <MenuItem                               
                            onClick={()=>{
                                handleMobileMenuClose();
                                setAtThis('alert');
                                clearTimer();
                                clearServerChartUpdateInterval();
                            }}
                            selected={atThis === "alert"}
                        >
                            <IconButton
                                size="large"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                                sx={{ width: "48px", height: "48px" }}
                            >
                                <Badge 
                                    badgeContent={100} 
                                    color="error" 
                                    variant="dot"                                
                                >
                                    <AppBarButton 
                                        theme={themes} 
                                        svg={AlertSvg} 
                                        name={"alertSvg"} 
                                        leftPopover={true}
                                    />                               
                                </Badge>
                            </IconButton>
                            <p>{i18n.t("view.alert")}</p>
                        </MenuItem>
                        <Divider 
                            sx={dividerStyle} 
                        />
                    </RouterLink> : ""
                }
                
                {
                    permissionObjs.view.workOrder === 1 ? 
                    <RouterLink to={"/nemp/workOrder"} className={themes + "-menu-a-tag"}>
                        <MenuItem                              
                            onClick={()=>{
                                handleMobileMenuClose();
                                setAtThis('workOrder');
                                clearTimer();
                                clearServerChartUpdateInterval();
                            }}
                            selected={atThis === "workOrder"}
                        >
                            <IconButton
                                size="large"
                                color="inherit"
                                sx={{ width: "48px", height: "48px" }}
                            >
                                <AppBarButton 
                                    theme={themes} 
                                    svg={WorkOrderSvg} 
                                    name={"workOrderSvg"} 
                                    leftPopover={true}
                                />
                            </IconButton>
                            <p>{i18n.t("view.workOrder")}</p>
                        </MenuItem>
                        <Divider 
                            sx={dividerStyle} 
                        />
                    </RouterLink> : ""
                }                                

                {
                    permissionObjs.view.log === 1 ? 
                    <RouterLink to={"/nemp/log"} className={themes + "-menu-a-tag"}>
                        <MenuItem                              
                            onClick={()=>{
                                handleMobileMenuClose();
                                setAtThis('log');
                                clearTimer();
                                clearServerChartUpdateInterval();
                            }}
                            selected={atThis === "log"}
                        >
                            <IconButton
                                size="large"
                                color="inherit"
                                sx={{ width: "48px", height: "48px" }}
                            >
                                <AppBarButton 
                                    theme={themes} 
                                    svg={LogSvg} 
                                    name={"logSvg"} 
                                    leftPopover={true}
                                />
                            </IconButton>
                            <p>{i18n.t("view.log")}</p>
                        </MenuItem>
                        <Divider 
                            sx={dividerStyle} 
                        />
                    </RouterLink> : ""
                }
                
                {
                    permissionObjs.view.setting === 1 ? 
                    <RouterLink to={"/nemp/setting"} className={themes + "-menu-a-tag"}>
                        <MenuItem                               
                            onClick={()=>{
                                handleMobileMenuClose();
                                setAtThis('setting');
                                clearTimer();
                                clearServerChartUpdateInterval();
                            }}
                            selected={atThis === "setting"}
                        >
                            <IconButton
                                size="large"
                                color="inherit"
                                sx={{ width: "48px", height: "48px" }}
                            >
                                <AppBarButton 
                                    theme={themes} 
                                    svg={SettingSvg} 
                                    name={"settingSvg"} 
                                    leftPopover={true}
                                />
                            </IconButton>
                            <p>{i18n.t("view.sys")}</p>
                        </MenuItem>
                    </RouterLink> : ""
                }                                                                
            </LeftStyledMenu>
        </ThemeProvider>
    );
}