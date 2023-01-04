import React from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Container } from './styles';

export default function GroupButtonsMini({black, click}) {
  return (
    <Container black={black}>
      <div className='divButton'>
        <MdModeEdit size={20} color={"white"} onClick={(e) => click("edit")} />
      </div>
      <div className='divButton'>
        <MdDelete size={20} color={"white"} onClick={(e) => click("delete")} />
      </div>
  </Container>
    )
}