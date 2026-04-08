import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Features from '../components/Features';
import SocialProof from '../components/SocialProof';
import LeadCapture from '../components/LeadCapture';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rajnikant AI - AI Operating System for Founders</title>
        <meta name="description" content="One AI system handles everything: content creation, video generation, AI sales automation, and real-time optimization. Start free today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rajnikant AI - Autonomous Business System" />
        <meta property="og:description" content="AI that builds, sells, and scales your business automatically." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-dark-900">
        <Header />
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <SocialProof />
        <LeadCapture />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
