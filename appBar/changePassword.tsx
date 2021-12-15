"use strict";

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import i18n from "i18next";
import clsx from 'clsx';
import Box from '@mui/material/Box';
import Lock from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import getPublicKey from '@/component/getKey';
import JSEncrypt from "jsencrypt";
import store from "store";
import { changePassword } from "@/api/userMerageApi";
import { currentHost, webPort } from '@/component/replaceHost';
import { apiRequestErrorHandler } from "@/api/apiRequestErrorHandler";
import { FormDialogProps } from '@/view/appBar/interface/componentProps';

export default function FormDialog(props: FormDialogProps) {

    const {        
        openChangePasswordDiaLog,        
        handleCloseChangePasswordDiaLog,
        handleSubmit,
        handleMessages,
        setOpenMessagesAlert,
        setValues,
        values,
        register,
        errors,
    } = props;    

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = data => {
        // 加密过的密码
        let encrypt = new JSEncrypt();        
        encrypt.setPublicKey(getPublicKey());
        let encrypted = encrypt.encrypt(data.password);
        handleCloseChangePasswordDiaLog();

        changePassword(store.get('username'), encrypted.toString()).then((response) => {
            if (response.code === 200) {
                handleMessages("success", i18n.t("change.success"));
                setOpenMessagesAlert(true);
                store.remove('nemp-token');
                location.assign(currentHost() + webPort() + "/login");

            } else {
                handleMessages("error", apiRequestErrorHandler(response.message));
                setOpenMessagesAlert(true);
            }
            
        }).catch((err) => {   
            
            handleMessages("error", i18n.t("request.error"));
            setOpenMessagesAlert(true);
            console.log(err);            
        });        
    };

    return (
        <Dialog open={openChangePasswordDiaLog} onClose={handleCloseChangePasswordDiaLog}>

            <DialogTitle>{i18n.t("user.change.password")}</DialogTitle>

            <DialogContent>
                <DialogContentText>
                    {i18n.t("please.enter.a.new.password")}
                </DialogContentText>

                <Box sx={{ display: 'flex', flexWrap: 'nowrap' }} className={"input-text-password"}>
                    <Lock sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

                    <TextField
                        className={"input-text-password-info"}
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}                                
                        fullWidth
                        autoComplete="false"
                        label={i18n.t("input.password")}                
                        variant="standard"
                        placeholder={i18n.t("input.password.example")}
                        {...register("password", 
                            { 
                                required: i18n.t("input.password.error").toString(), 
                                minLength: {value: 4, message: i18n.t("input.minLength.error")},
                                maxLength: {value: 16, message: i18n.t("input.maxLength.error")}                        
                            }
                        )}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">                            
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}                
                    />
                    {errors.password && 
                        <span className={clsx("error-input-password")}>
                            {errors.password.message}
                        </span>}
                </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleSubmit(onSubmit)}>{i18n.t("submit")}</Button>
                <Button onClick={handleCloseChangePasswordDiaLog}>{i18n.t("cancel")}</Button>
            </DialogActions>
        </Dialog>
    );
}