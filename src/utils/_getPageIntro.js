import React from 'react'
import Markdown from 'react-remarkable'

function _getPageIntro(intros, path) {
    let result = {}
    intros.map(
      (pageIntro) => {
        if (path.includes(pageIntro.fields.page.toLowerCase())) {
          result = pageIntro.fields
        }
        return true
      }

    )
    return (
      <div className="page-intro">
        <h2>{result.title}</h2>
          <Markdown>
            {result.description}
          </Markdown>
      </div>
    )
  }

export default _getPageIntro
