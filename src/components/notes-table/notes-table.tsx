import React from 'react'
import { Button } from '../common/button/button'

import deleteIcon from '../../assets/delete.png'
import archiveIcon from '../../assets/archive.png'

const NotesTable: React.FC = () => {
  return (
    <div className="table">
      <div className="table__header item item--header">
        <p className="table__header-description">Name</p>
        <p className="table__header-description">Created</p>
        <p className="table__header-description">Category</p>
        <p className="table__header-description">Content</p>
        <p className="table__header-description">Dates</p>
        <div className="item__buttons buttons__wrapper">
          <Button type='button'>
            <img src={deleteIcon} alt="" />
          </Button>
          <Button type='button'>
            <img src={archiveIcon} alt="" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { NotesTable }