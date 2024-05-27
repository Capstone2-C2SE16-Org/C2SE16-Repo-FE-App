import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { API_URL,useAuth } from './AuthContextApi';


const AlbumContext = createContext();
export const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const { authState } = useAuth();

  const addAlbum = (album) => {
    setAlbums((prevAlbums) => [...prevAlbums, album]);
  };

  const addPhotoToAlbum = (classroom, albumName, photoUri) => {
    const url = `http://172.26.209.46:8000/api/classrooms/${classroom}/images`;
    const formData = new FormData();
    formData.append('image', {
      uri: photoUri,
      type: 'image/jpeg', 
      name: 'photo.jpg',
    });

    axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${authState?.token}`
      },
    }).then(response => {
      if (response.status === 200) {
        setAlbums((prevAlbums) =>
          prevAlbums.map((album) =>
            album.title === albumName
              ? { ...album, photos: [...album.photos, photoUri] }
              : album
          )
        );
      }
    }).catch(error => {
      console.error('Error uploading image:', error);
    });
  };

  return (
    <AlbumContext.Provider value={{ albums, addAlbum, addPhotoToAlbum }}>
      {children}
    </AlbumContext.Provider>
  );
};

export const useAlbum = () => useContext(AlbumContext);
