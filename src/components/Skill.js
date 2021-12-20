import React from 'react'

function Skill(props) {

    if (props.context === "edit") {

        return (
            <div className="skill__container">
                <input className="skill__input" type="text" name="skill" value={props.skill.skill} onChange={(e)=>props.onChange(e, props.id)}/>
                <button className="skill__button--delete" onClick={()=>props.onDelete(props.id)}>Delete</button>
            </div>
        )

    }

    if (props.context === "preview") {

        return(
            <h3 className="preview__item">{props.skill.skill}</h3>
        )
    }

}

export default Skill;