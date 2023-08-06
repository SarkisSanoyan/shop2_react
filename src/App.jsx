import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { DetailPage } from './pages/DetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { Header } from './components/Header';
import { Footer } from './components/Footer';


export function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:name' element={<CategoryPage />} />
        <Route path='/recipe/:id' element={<DetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
       </Routes>
      <Footer />
    </>
  )
}
