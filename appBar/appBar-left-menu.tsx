"use strict";

import * as React from 'react';
import i18n from "i18next";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AppBarButton from "@/view/appBar/resource/appBarButton";
import HomeSvg from "@/view/appBar/resource/home-svg";
import DeviceSvg from "@/view/appBar/resource/device-svg";
import AlertSvg from "@/view/appBar/resource/alert-svg";
import WorkOrderSvg from "@/view/appBar/resource/workOrder-svg";
import LogSvg from "@/view/appBar/resource/log-svg";
import SettingSvg from "@/view/appBar/resource/setting-svg";
import { ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { clearTimer } from '@/view/home/resource/chart-equipmentStatistics';
import { clearServerChartUpdateInterval } from '@/view/home/home-systemStatus';
import { 
    MenuButtonTooltip, 
    lightThemeMenuButtonTooltip, 
    darkThemeMenuButtonTooltip 
} from "@/component/MenuThemeComponent";
import { LeftMenuProps } from '@/view/appBar/interface/componentProps';

export default function LeftMenu(props: LeftMenuProps) {

    const { themes, atThis, setAtThis, permissionObjs } = props;

    const toHomeViewUrl = () => {
        setAtThis("home");      
        clearTimer();
        clearServerChartUpdateInterval();
    }
    const toDeviceViewUrl = () => {
        setAtThis("device");
        clearTimer();
        clearServerChartUpdateInterval();
    }
    const toAlertViewUrl = () => {
        setAtThis("alert");
        clearTimer();
        clearServerChartUpdateInterval();
    }
    const toWorkOrderViewUrl = () => {
        setAtThis("workOrder");
        clearTimer();
        clearServerChartUpdateInterval();
    }
    const toLogViewUrl = () => {
        setAtThis("log");
        clearTimer();
        clearServerChartUpdateInterval();
    }
    const toSettingViewUrl = () => {        
        setAtThis("setting");
        clearTimer();
        clearServerChartUpdateInterval();
    }

    const theme = themes === "themeLight" ? lightThemeMenuButtonTooltip : darkThemeMenuButtonTooltip;

    return (   
        <ThemeProvider theme={theme}>                 
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {
                    permissionObjs.view.home === 1 ? 
                    <MenuButtonTooltip title={i18n.t("view.home")} >
                        <RouterLink to={"/nemp/home"}>
                            <IconButton 
                                size="large"                             
                                color="inherit" 
                                sx={{ marginRight: '5px' }}
                                onClick={toHomeViewUrl}
                            >
                                <AppBarButton theme={themes} svg={HomeSvg} atThis={atThis}/>
                            </IconButton>
                        </RouterLink>
                    </ MenuButtonTooltip> : ""
                }
                
                {
                    permissionObjs.view.device === 1 ?
                    <MenuButtonTooltip title={i18n.t("view.device")}>
                        <RouterLink to={"/nemp/device"}>
                            <IconButton
                                size="large"                            
                                color="inherit" 
                                sx={{ marginRight: '5px' }}
                                onClick={toDeviceViewUrl}
                            >
                                <AppBarButton theme={themes} svg={DeviceSvg} atThis={atThis}/>
                            </IconButton>
                        </RouterLink>
                    </ MenuButtonTooltip> : ""
                }

                {
                    permissionObjs.view.alert === 1 ?
                    <MenuButtonTooltip title={i18n.t("view.alert")}>
                        <RouterLink to={"/nemp/alert"}>
                            <IconButton
                                size="large"                            
                                color="inherit" 
                                sx={{ marginRight: '5px' }}
                                onClick={ toAlertViewUrl }
                            >
                                <Badge 
                                    badgeContent={100} 
                                    color="error" 
                                    variant="dot"                                
                                >
                                    <AppBarButton theme={themes} svg={AlertSvg} name={"alertSvg"} atThis={atThis}/>                               
                                </Badge>
                            </IconButton>
                        </RouterLink>
                    </ MenuButtonTooltip> : ""
                }

                {
                    permissionObjs.view.workOrder === 1 ?
                    <MenuButtonTooltip title={i18n.t("view.workOrder")}>
                        <RouterLink to={"/nemp/workOrder"}>
                            <IconButton
                                size="large"                            
                                color="inherit" 
                                sx={{ marginRight: '5px', width: "48px" }}
                                onClick={toWorkOrderViewUrl}
                            >
                                <AppBarButton theme={themes} svg={WorkOrderSvg} name={"workOrderSvg"} atThis={atThis}/>
                            </IconButton>
                        </RouterLink>
                    </ MenuButtonTooltip> : ""
                }
                
                {
                    permissionObjs.view.log === 1 ?
                    <MenuButtonTooltip title={i18n.t("view.log")}>
                        <RouterLink to={"/nemp/log"}>
                            <IconButton
                                size="large"                            
                                color="inherit" 
                                sx={{ marginRight: '5px', width: "48px" }}
                                onClick={toLogViewUrl}
                            >
                                <AppBarButton theme={themes} svg={LogSvg} name={"logSvg"} atThis={atThis}/>
                            </IconButton>
                        </RouterLink>
                    </ MenuButtonTooltip> : ""
                }
                
                {
                    permissionObjs.view.setting === 1 ?
                    <MenuButtonTooltip title={i18n.t("view.sys")}>
                        <RouterLink to={"/nemp/setting"}>
                            <IconButton
                                size="large"                            
                                color="inherit" 
                                sx={{ marginRight: '5px', width: "48px", height: "48px" }}
                                onClick={toSettingViewUrl}
                            >
                                <AppBarButton theme={themes} svg={SettingSvg} name={"settingSvg"} atThis={atThis}/>
                            </IconButton>
                        </RouterLink>
                    </ MenuButtonTooltip> : ""
                }
            </Box>
        </ThemeProvider>        
    )
}