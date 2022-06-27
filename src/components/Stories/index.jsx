import React from 'react'

//utils
import storiesTest from '../../utils/storiesTest'

//components
import Story from '../Story'

export default function Stories() {
  return storiesTest.map((story, index) => <Story user={story} index={index} />)
}