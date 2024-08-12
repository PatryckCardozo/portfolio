"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    
    router.push('/Home');
  }, [router]);

  return null; 
};

export default RedirectPage;
