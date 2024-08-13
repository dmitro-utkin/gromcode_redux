import React from 'react';

export const themes = {
  dark: {
    fontcolor: '#fff',
    background: '#222',
  },
  light: {
    fontcolor: '#000',
    background: '#eee',
  },
};

export const ThemeContext = React.createContext(themes.dark);