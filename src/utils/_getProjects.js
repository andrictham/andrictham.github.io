import React from "react"
import Markdown from "react-remarkable"

function _getProjects(projects) {
    let projectsContent = []
    projects.map(
      (project) => {
         projectsContent.push(
          <div id={`project-${project.sys.id}`} key={project.sys.id}>
            <h3>{project.fields.headline}</h3>
            <Markdown>{project.fields.caseStudy}</Markdown>
          </div>
        )
        return true
      }
    )
    return (
      <div className="projects">
        {projectsContent}
      </div>
    )
  }

export default _getProjects
