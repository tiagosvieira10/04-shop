import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1180,
  margin:'0 auto',

  link: {
    TextDecorantion: 'none'
  }

})

// export const LinkContainer = styled('div', {
  
// })

export const FooterContainer = styled('footer', {
  color: '$greyPrimary',
  padding: '20px',
  textAlign: 'center',

  margin: '4rem auto',
})