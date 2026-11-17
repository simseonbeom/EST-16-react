
import notesData from '@/data/notes.json'
import usersData from '@/data/users.json'



export type Note = (typeof notesData)[number] & {
  expand?:{
    user: typeof usersData[number];
  }
}


// 노트 목록 가져오기 (노트 데이터 + 유저 정보 합치기)
export function getNoteList():Note[] {
  return notesData.map((note)=>{
    const user = usersData.find((user)=> user.id === note.userId);
    return user ? 
    { ...note, expand:{user} } : note;
  })
}

// .single()
// .getOne()

// 노트 하나만 조회
export function getNoteItem(noteId: number){
  const notes = getNoteList();
  const note = notes.find((note)=> note.id === noteId);
  return note ? note : null;
}






























