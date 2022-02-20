import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faPaintbrush,
  faImages,
} from '@fortawesome/free-solid-svg-icons';

export const commandButtonIcons = {
  bold: <FontAwesomeIcon icon={faBold} />,
  italic: <FontAwesomeIcon icon={faItalic} />,
  underline: <FontAwesomeIcon icon={faUnderline} />,
  strikethrough: <FontAwesomeIcon icon={faStrikethrough} />,
  fontColor: <FontAwesomeIcon icon={faPaintbrush} />,
  uploadImage: <FontAwesomeIcon icon={faImages} />,
};

export const textCommandTagMap = {
  bold: ['B', 'STRONG'],
  italic: ['I', 'EM'],
  strikethrough: ['STRIKE', 'S'],
  underline: ['U', 'U'],
};

export const commandKeyMap = {
  KeyB: 'bold',
  KeyI: 'italic',
  KeyS: 'strikethrough',
  KeyU: 'underline',
};

export const fontColorMap = [
  {
    red: '#ff0000',
    orange: '#ffa500',
    yellow: '#ffff00',
    green: '#008000',
    blue: '#0000ff',
    navy: '#000080',
    purple: '#800080',
    white: '#ffffff',
    gray: '#808080',
    black: '#000000',
  },
];

export const imageFileTypes = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/x-icon',
];
