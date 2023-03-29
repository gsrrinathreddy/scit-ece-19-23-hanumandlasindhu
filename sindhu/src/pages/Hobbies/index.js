import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
   
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvn4Y_TJ9Wd3UPsCEGrYtnWb7PFM4tjZrcg&usqp=CAU',
    title: 'Crafting',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.narayanahealth.org/blog/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-09-at-8.40.47-PM.jpeg',
    title: 'Listening Music',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxCzFHkWEGjItgTEaQwZaXUwOnpKovsnmWA&usqp=CAU',
    title: 'Gardening',
    
  },
  
];