import React from 'react'
import Skill from './Skill'
import phoneImage from "/home/axel/resumebuilder/src/assets/phone_black_24dp.svg";
import emailImage from "/home/axel/resumebuilder/src/assets/email_black_24dp.svg";
import linkedInImage from "/home/axel/resumebuilder/src/assets/linkedin-logo.png";

function Preview(props) {

    const skill = props.namecard.skills.map((skill) => (
        <Skill
          key={skill.id}
          id={skill.id}
          skill={skill}
          context = "preview"
        />
      ));

    return (
        <div className="app__preview">
            <div className="preview__container">
                <h1 className="preview__title">{props.namecard.info.name}</h1>
                <h2 className="preview__subtitle">{props.namecard.info.desc}</h2>
                <div className="preview__subcontainer preview__subcontainer--contact">
                    <h3 className="preview__header">Contact Me</h3>
                    <h3 className="preview__item preview__item--flex">
                        <img src={phoneImage} alt="" />
                        {props.namecard.info.phone}
                    </h3>
                    <h3 className="preview__item preview__item--flex">
                        <img src={emailImage} alt="" />
                        {props.namecard.info.email}
                    </h3>
                    <h3 className="preview__item preview__item--flex">
                        {props.namecard.info.linkedIn}
                    </h3>
                </div>
                <div className="preview__subcontainer preview__subcontainer--skills">
                    <h3 className="preview__header">Skills</h3>
                    {skill}
                </div>
            </div>
        </div>
    )

}

export default Preview;