import React from 'react'
import UseAnimations from 'react-useanimations'
import github from 'react-useanimations/lib/github'
import download from 'react-useanimations/lib/download'

type Props = {};

const Animation: React.FunctionComponent<Props> = ({ }) => {
    return (
        <React.Fragment>
            <UseAnimations animation={download} size={56} />
            <div onClick={() => console.log("action clicked")}>
            <UseAnimations animation={github} size={56} />
            </div>
        </React.Fragment>
    )
}

export default Animation