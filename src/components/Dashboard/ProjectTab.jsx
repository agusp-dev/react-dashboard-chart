import React from 'react'
import { ProjectDashboard } from './ProjectDashboard'

const ProjectTab = ({ project, editCards }) => {

  return (
    <div
      style={{
        minHeight: '200px',
        width: '100%',
        opacity: 1,
        marginTop: '10px'
      }}
    >
      <ProjectDashboard
        project={project}
        editCards={editCards}
      />
    </div>
  )
}

export { ProjectTab }