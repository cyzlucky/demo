import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export type LeftMenuProps = Omit<AppBarMenuProps, 
    "mobileMenuId" |
    "currentUsername" | 
    "menuId" |
    "handleMobileMenuOpen" | 
    "handleClickRightOpen" | 
    "handleClickOpenSwitchThemeView" | 
    "handleClickOpenSwitchLanguageView" | 
    "handleClickOpenUserSettingMenu" | 
    "setBottoms"
>

export type RightMenuProps = Omit<AppBarMenuProps, 
    "atThis" | 
    "mobileMenuId" | 
    "setAtThis" |
    "permissionObjs" | 
    "handleMobileMenuOpen" |
    "handleClickRightOpen"
>;

export interface FormDialogProps{
    openChangePasswordDiaLog: boolean,
    handleCloseChangePasswordDiaLog: () => void,
    handleSubmit: UseFormHandleSubmit<Record<string, any>>,
    handleMessages: (severity: any, message: any) => void,
    setOpenMessagesAlert: React.Dispatch<React.SetStateAction<boolean>>,
    setValues: React.Dispatch<React.SetStateAction<{
        password: string;
        showPassword: boolean;
    }>>,
    values: {
        password: string;
        showPassword: boolean;
    },
    register: UseFormRegister<Record<string, any>>,
    errors: {
        [x: string]: any;
    },
}

export interface UserSettingProps extends AppBarComponentProps{
    switchThemeButtonAnchorEl: HTMLElement, 
    openSwitchThemeView: boolean, 
    handleCloseSwitchThemeView: () => void, 
    handleClickOpenChangePasswordDiaLog: () => void, 
    bottoms: string, 
}

export interface SwitchLanguageProps extends AppBarComponentProps{
    switchThemeButtonAnchorEl: HTMLElement,
    openSwitchThemeView: boolean,
    handleCloseSwitchThemeView: () => void,
    bottoms: string,
}

export interface SwitchThemeProps extends AppBarComponentProps {
    switchThemeButtonAnchorEl: HTMLElement,
    openSwitchThemeView: boolean,
    handleCloseSwitchThemeView: () => void,
    bottoms: string,
}

export interface RightPopoverMenuProps extends AppBarComponentProps{
    anchorElRight: HTMLElement,
    openRight: boolean,
    handleCloseRight: () => void,
    handleClickOpenSwitchThemeView: (event: React.MouseEvent<HTMLElement>) => void,
    handleClickOpenSwitchLanguageView: (event: React.MouseEvent<HTMLElement>) => void,
    handleClickOpenUserSettingMenu: (event: React.MouseEvent<HTMLElement>) => void,
    setBottoms: React.Dispatch<React.SetStateAction<string>>,
}

export interface LeftPopoverMenuProps extends AppBarComponentProps{
    mobileMoreAnchorEl: HTMLElement,
    mobileMenuId: string,
    isMobileMenuOpen: boolean, 
    handleMobileMenuClose: () => void,
    permissionObjs: any,   
    atThis: string,  
    setAtThis: React.Dispatch<React.SetStateAction<string>>,
}

export interface AppBarMenuProps extends AppBarComponentProps {
    mobileMenuId: string,
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void,
    handleClickRightOpen: (event: React.MouseEvent<HTMLElement>) => void,
    currentUsername: string,
    handleClickOpenSwitchThemeView: (event: React.MouseEvent<HTMLElement>) => void,
    handleClickOpenSwitchLanguageView: (event: React.MouseEvent<HTMLElement>) => void,
    handleClickOpenUserSettingMenu: (event: React.MouseEvent<HTMLElement>) => void,
    menuId: string,
    setBottoms: React.Dispatch<React.SetStateAction<string>>,
    setAtThis: React.Dispatch<React.SetStateAction<string>>,
    atThis: string,
    permissionObjs: any,
}

export interface AppBarComponentProps {
    themes: "themeLight" | "themeDark",
}