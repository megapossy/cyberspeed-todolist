const months = [
  'Jan',
  'Feb',
  'Mar',
  'April',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]

export const format = (date: string) => {
  const d = new Date(date)
  const time = `${d.getHours()}:${d.getMinutes()}`
  return `${d.getFullYear()} ${months[d.getMonth()]}, ${d.getDate()}  ${time}`
}
