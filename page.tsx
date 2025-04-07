
'use client';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="p-6 max-w-6xl mx-auto space-y-12 text-center">
      <h1 className="text-4xl font-bold">Welkom bij Startups.nl</h1>
      <p className="text-lg text-gray-500">Het platform voor de Nederlandse startup scene</p>
      <div className="flex justify-center mt-4">
        <Input placeholder="Zoek startups, vacatures, investeerders..." className="w-full max-w-xl" />
      </div>
      <Button className="mt-4">Bekijk startups</Button>
    </main>
  );
}
