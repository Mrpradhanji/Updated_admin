'use client'
import { apiGet } from '@/helpers/axiosRequest';
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const ArtistPage = ({ params }: { params: { id: string } }) => {


  const artistId = params.id
  // const [decodedArtistId, setDecodedArtistId] = useState('');
  const decodedArtistId = atob(artistId as string)
  const [isLoading, setIsLoading] = useState(true)
  const [artists, setArtists] = useState()

  const fethcArtisDetails = async () => {
    console.log("decodedArtistId");
    console.log(decodedArtistId);
    console.log(`/api/artist/getArtistDetails?artistId=${decodedArtistId}`);

    try {
      const response = await apiGet(`/api/artist/getArtistDetails?artistId=${decodedArtistId}`)
      console.log("response");
      console.log(response.data);

      if (response.success) {
        setArtists(response.data)
      }
      setIsLoading(false)

    } catch (error) {
      toast.error("🤔 Kuch galti hogaya")
      setIsLoading(false)
    }

  }

  // useEffect(() => {
  //   if (artistId) {
  //     setDecodedArtistId(atob(artistId as string));
  //   }
  // }, [artistId]);

  useEffect(() => {
    fethcArtisDetails()
  }, []);




  if (!decodedArtistId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Artist Page</h1>
      <p>Artist ID: {decodedArtistId}</p>
      {/* Fetch and display artist details using the decodedArtistId */}
    </div>
  );
};

export default ArtistPage;
