import React from 'react';
import { imageFileTypes } from "../settings";

export default function HiddenImageInput() {
  return (
    <input type='file' accept={imageFileTypes.join(', ')} />
  )
}
