"use client";
import styles from './page.module.css'
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import RestaurantCard from './components/RestaurantCard';

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <main className={styles.main}>
      <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">

          <NavBar />
          <main>
            <Header />
            <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
              <RestaurantCard />
            </div>
            
          </main>
        </main>
      </main>
    </main>

  )
}
