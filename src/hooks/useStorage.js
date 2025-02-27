import { useState } from 'react';
import { uploadFile } from '@/lib/storage';

const useStorage = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  const upload = async (file, path) => {
    setUploading(true);
    setError(null);
    try {
      const url = await uploadFile(file, path);
      setDownloadUrl(url);
      return url;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return { uploading, error, downloadUrl, upload };
};

export default useStorage;
