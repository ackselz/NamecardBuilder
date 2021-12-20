import React from 'react'
import Skill from './Skill'

function Editor(props) {

    const skill = props.namecard.skills.map((skill) => (
        <Skill
          key={skill.id}
          id={skill.id}
          skill={skill}
          onChange={props.onChangeSkills}
          onDelete={props.onDeleteSkill}
          context = "edit"
        />
      ));

    return (
        <div className="app__editor">
            <div className="editor__container">
                <label className="editor__label--info" htmlFor="name">
                    Your Name:
                    <input className="editor__input--info" type="text" name="name" placeholder="Name" value={props.namecard.name} onChange={props.onChangeInfo}/>
                </label>
                <label className="editor__label--info" htmlFor="desc">
                    Brief Description:
                    <input className="editor__input--info" type="text" name="desc" placeholder="Brief Description" value={props.namecard.desc} onChange={props.onChangeInfo}/>
                </label>
                <label className="editor__label--info" htmlFor="phone">
                    Contact Number:
                    <input className="editor__input--info" type="text" name="phone" placeholder="Contact Number" value={props.namecard.phone} onChange={props.onChangeInfo}/>
                </label>
                <label className="editor__label--info" htmlFor="email">
                    Email Address:
                    <input className="editor__input--info" type="text" name="email" placeholder="Email Address" value={props.namecard.email} onChange={props.onChangeInfo}/>
                </label>
                <label className="editor__label--info" htmlFor="linkedIn">
                    LinkedIn URL:
                    <input className="editor__input--info" type="text" name="linkedIn" placeholder="LinkedIn URL" value={props.namecard.linkedIn} onChange={props.onChangeInfo}/>
                </label>

                <div className="editor__subcontainer">
                    <p>Your Skills:</p>
                    {skill}
                    <button className="skill__button--add" onClick={()=>props.onAddSkill()}>Add Skill</button>
                </div>
            </div>
        </div>
    )

}

export default Editor;