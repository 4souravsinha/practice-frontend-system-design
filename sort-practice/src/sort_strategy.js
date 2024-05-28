export function dateSort(data){
  return [...data].sort((a, b) => {
    return new Date(a.dob) - new Date(b.dob)
  })
}

export function wordSort(data){
  return [...data].sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
}

export function numberSort(data){
  return [...data].sort((a, b) => {
    return a.age - b.age
  })
}
