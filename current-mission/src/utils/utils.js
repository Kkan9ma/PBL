import React from "react";
import { imageFileTypes } from "../constants/fileTypes";

export const generateKey = (pre) => `${ pre }_${ new Date().getTime() }`;
export const validImageFileType = (file) => imageFileTypes.includes(file.type);
export const validAudioFileType = (file) => file.type.includes(file.type);
export const getImageFromInput = (file) => <img alt='' src={URL.createObjectURL(file)} />;
