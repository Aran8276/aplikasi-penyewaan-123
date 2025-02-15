import React from "react";
import HomeView from "./Home.view";
import { Testimonial } from "./Home.type";

export default function Home() {
  const dummyTestimonials: Testimonial[] = [
    {
      stars: 5,
      body: "Saya sangat puas dengan layanan ini. Terima kasih atas bantuan Anda.",
      person: "John Doe",
      date: new Date(),
    },
    {
      stars: 5,
      body: "Layanan ini cukup baik, tetapi ada beberapa hal yang bisa lebih baik.",
      person: "Jane Smith",
      date: new Date(),
    },
    {
      stars: 4,
      body: "Saya senang dengan layanan ini. Terima kasih atas bantuan Anda.",
      person: "Mike Johnson",
      date: new Date(),
    },
    {
      stars: 4,
      body: "Saya senang dengan layanan ini. Terima kasih atas bantuan Anda.",
      person: "Mike Johnson",
      date: new Date(),
    },
    {
      stars: 4,
      body: "Saya senang dengan layanan ini. Terima kasih atas bantuan Anda.",
      person: "Mike Johnson",
      date: new Date(),
    },
  ];

  return <HomeView dummyTestimonials={dummyTestimonials} />;
}
