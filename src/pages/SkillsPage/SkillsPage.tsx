import React, { FC } from 'react';
import Skills from '../../components/Skills/Skills';
import ISkills from '../../interfaces/ISkills';

const SkillsPage: FC<ISkills> = ({ skills }) => <Skills skills={skills} />;

export default SkillsPage;
