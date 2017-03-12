import React from "react"

function _getSkills(skills) {
    let skillsList = []
    skills.map(
      (skill) => {
         skillsList.push(
            <li key={skill.sys.id}>{skill.fields.name}</li>
        )
        return true
      }
    )
    return (
      <ul className="skills">
        {skillsList}
      </ul>
    )
  }

export default _getSkills
