"use client";
import styles from './page.module.css'
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import RestaurantCard from './components/RestaurantCard';

// CF79QTIHOIksirkq

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <>
      <main>
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </>
  )
}
