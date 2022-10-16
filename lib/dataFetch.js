import skills from '@content/skillsData'

export const getSkills = () => {
    return skills.filter((skill) => skill.pinned)
}