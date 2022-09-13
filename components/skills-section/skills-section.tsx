import React, { ReactNode } from 'react';
import { Grid, GridProps, Row } from '@nextui-org/react';
import Image from 'next/image';

import withDefaults from "../../shared/utils/with-defaults"


type MySkills = {
    name: string;
    [key: string]: string | number;
}

interface Props {
    skills: MySkills[];
}

export type MySkillsProps = Props;

const defaultProps = {
    xs: 12,
    sm: 4,
    lg: 3,
  };

const SkillSection: React.FC<Props> = ({ skills, ...props }) => {
    return (
        <Grid.Container gap={2} {...props}>
            {skills.map((skill, index) => (
                <Grid key={`$skill_${index}`}>
                    <Image src={`/icons/${skill}.svg`} alt={skill.name} width={50} height={50} />
                  

                </Grid>
            ))}
        </Grid.Container>
    )
}

export default withDefaults (SkillSection, defaultProps);