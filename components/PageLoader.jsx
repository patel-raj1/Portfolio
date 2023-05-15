import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LoaderImage from '../public/Rainbow.gif';

const PageLoader = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 50000); // Add a delay of 500 milliseconds (adjust as needed)
    };

    const stopLoading = () => setLoading(false);

    // Hook into Next.js router events
    router.events.on('routeChangeStart', startLoading);
    router.events.on('routeChangeComplete', stopLoading);
    router.events.on('routeChangeError', stopLoading);

    return () => {
      router.events.off('routeChangeStart', startLoading);
      router.events.off('routeChangeComplete', stopLoading);
      router.events.off('routeChangeError', stopLoading);
    };
  }, [router]);

  return loading ? (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src="https://i.ibb.co/LNSNvyy/Tiger-logo.png" alt="Loading..." />
    </div>
  ) : null;
};

export default PageLoader;
