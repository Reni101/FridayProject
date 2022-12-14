import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import style from './checkEmailPage.module.css'
import CheckEmail from "../../../assets/chekEmail.svg"
import {Slide} from 'react-awesome-reveal';
import {setRecoverEmailAC} from "../RecoveryPasswordReducer";
import {useDispatch} from "react-redux";

export const CheckEmailPage = () => {


    const dispatch = useDispatch()
    useEffect(()=>{
        return ()=>{
            dispatch(setRecoverEmailAC({email:null}))
        }
    },[dispatch])



    const email = useAppSelector(store => store.ForgotPassword.email)
    return (
        <Slide direction={'up'}>

            <div className={style.wrapper_checkEmail}>
                <h2 className={style.Title}>Check Email</h2>
                <img src={CheckEmail} alt=""/>

                <div className={style.Text}>We’ve sent an Email with instructions to {email}</div>
               <div  className={style.Link}> <NavLink to={"/"}> Back to login </NavLink></div>
            </div>

        </Slide>
    );
};

