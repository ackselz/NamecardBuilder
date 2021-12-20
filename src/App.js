import './App.css';
import React, { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'

function App() {
  
  let namecardTemplate = {
    info: {
      name: 'Name',
      desc: 'Job/Title',
      phone: '9753 2468',
      email: 'email@example.com',
      linkedIn: 'https://sg.linkedin.com/',
    },
    skills: [{id: newID(), skill:'',},],
  };
  
  const [namecard, setNamecard] = useState(namecardTemplate);

  function newID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  function handleChangeInfo(e, id) {

    setNamecard((prevState) => ({
      ...prevState,
      info: {
        ...prevState.info,
        [e.target.name]: e.target.value,
      },
    }))

  }

  function handleChangeSkills(e, id) {

    setNamecard((prevState) => {
      const newSkills = prevState.skills.map((skill) => {
        if (skill.id === id) {
          return { ...skill, [e.target.name]: e.target.value }
        }
        return skill
      })
      return { ...prevState, skills: [...newSkills] }
    })

    console.log(namecard.skills)
  }

  function handleAddSkill() {

    if (namecard.skills.length > 2) {
      return
    }
    setNamecard((prevState) => ({
      ...prevState,
      skills: [
        ...prevState.skills,
        {
          id: newID(),
          skill: '',
        },
      ],
    }))

    console.log(namecard.skills)

  }

  function handleDeleteSkill(id) {

    setNamecard((prevState) => {
      const newSkills = prevState.skills.filter(
        (skill) => skill.id !== id
      )
      return { ...prevState, skills: [...newSkills] }
    })

  }

  return (
    <div className="app">
      <Editor namecard={namecard} onChangeInfo={handleChangeInfo} onChangeSkills={handleChangeSkills} onAddSkill={handleAddSkill} onDeleteSkill={handleDeleteSkill}/>
      <Preview namecard={namecard}/>
    </div>
  );
}

export default App;
