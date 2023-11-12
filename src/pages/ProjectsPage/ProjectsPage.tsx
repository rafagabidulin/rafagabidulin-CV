import React from 'react';
import IProjects from '../../interfaces/IProjects';
import Projects from '../../components/Projects/Projects';

const ProjectsPage: FC<IProjects> = ({ projects }) => <Projects projects={projects} />;

export default ProjectsPage;
