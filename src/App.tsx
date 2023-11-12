import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AboutMePage from './pages/AboutMePage/AboutMePage';
import skills from './data/skills';
import projects from './data/projects';
import education from './data/education';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import EducationPage from './pages/EducationPage/EducationPage';
import PostsPage from './pages/PostsPage/PostsPage';

export const App = () => (
  <div>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<AboutMePage />} />
          <Route path='/skills' element={<SkillsPage skills={skills} />} />
          <Route path='/projects' element={<ProjectsPage projects={projects} />} />
          <Route path='/education' element={<EducationPage education={education} />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </div>
);
