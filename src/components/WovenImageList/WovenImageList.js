
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function WovenImageList({ specialties }) {
    return (
        <ImageList sx={{
            width: '100%',
            maxWidth: 1900, // Set a maximum width for larger screens
            height: 450,
            display:'flex',
            flexWrap:'wrap',
            overflow:'hidden',
            justifyContent:'center',
        }} variant="woven" cols={3} gap={5}>
            {specialties.map((item, index) => (
                <ImageListItem key={index}>
                    <img
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


