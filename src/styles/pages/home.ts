import { styled } from "..";

export const HomeContainer = styled('main', {
  display: "flex",
  width:'100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #AFF1F4 0%, #FFFFFF 100%)',
  borderRadius: 8,
  cursor:'pointer',
  position: 'relative',
  overflow: 'hidden',
  
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.5rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#AFF1F4',

    transform: 'translateY(100%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$white'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$white'
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})