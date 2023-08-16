import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 0.5rem)',
  background: 'linear-gradient(180deg, #5DE0E6 0%, #004AAD 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: { 
    objectFit: 'cover'
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: { 
    fontSize: '$2xl',
    color: '$greyPrimary'
  },

  span: { 
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$greyPrimary'
  },

  p: { 
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$greyPrimary',
  },
  
  button: {
    marginTop: 'auto',
    backgroundColor: '$greyPrimary',
    border: 0,
    color: '$bluePrimary',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold', 
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$white' 
    }
  }
})
