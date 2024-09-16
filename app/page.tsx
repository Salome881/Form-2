'use client';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from "@/components/ui/button";

const notify = () => toast('Here is your toast.');

export default function Home() {
  return (
    <div style={{ 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"
    }}>
      <Button onClick={notify}>Click me here</Button>
      <Toaster />
       </div>
  );
}