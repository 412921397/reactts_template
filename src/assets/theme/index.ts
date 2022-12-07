const theme = {
  color: { primary: '#333', secondaryColor: '#00848A' },
  size: { large: '24px', middle: '16', small: '14px' },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {box-shadow: 0 2px 4px rgba(0,0,0,.18);}
    `
  }
};

export default theme;
