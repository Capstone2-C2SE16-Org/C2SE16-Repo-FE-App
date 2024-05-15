import React, { createContext, useState, useContext } from 'react';

const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);

  const addAlbum = (album) => {
    setAlbums((prevAlbums) => [...prevAlbums, album]);
  };

  const addPhotoToAlbum = (albumName, photo) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((album) =>
        album.title === albumName
          ? { ...album, photos: [...album.photos, photo] }
          : album
      )
    );
  };

  return (
    <AlbumContext.Provider value={{ albums, addAlbum, addPhotoToAlbum }}>
      {children}
    </AlbumContext.Provider>
  );
};

export const useAlbum = () => useContext(AlbumContext);
