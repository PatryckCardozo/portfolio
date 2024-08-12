"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {

    const timer = setTimeout(() => {
      router.push('/Home');
    }, 1500); 


    return () => clearTimeout(timer);
  }, [router]);

  return null; 
};

export default RedirectPage;
