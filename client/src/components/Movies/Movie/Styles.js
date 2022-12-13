import { styled } from '@mui/material/styles';
// import { alpha } from '@mui/material/styles'


const PREFIX = 'Movie';

export const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  cardActions: `${PREFIX}-cardActions`,
  cardContent: `${PREFIX}-cardContent`,
  link: `${PREFIX}-link`,
}


export const Root = styled('div')(({ theme }) => ({
 [`&.${classes.root}`]: {
    maxWidth: '100%',
 },
 [`& .${classes.media}`]: {
    height: 0,
    paddingTop: '56.25%',
 },
 [`& .${classes.cardActions}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
 },
 [`& .${classes.cardContent}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  [`& .${classes.link}`]: {
   textDecoration: "none"
},
}))
