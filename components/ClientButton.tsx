// components/ClientButton.tsx
'use client';

export default function ClientButton() {
  const notify = () => {
    console.log('Button clicked!');
  };

  return (
    <button onClick={notify}>Click me</button>
  );
}
