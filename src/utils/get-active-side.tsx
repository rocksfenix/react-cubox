
interface GetActiveSide {
  positionY: number
  positionX: number
  upsideDown: boolean
}

export default function getActiveSide (data: GetActiveSide) {
  const { positionY, positionX, upsideDown } = data

  let activeSide = 0
  if(!(positionY >= 46 && positionY <= 130) && !(positionY >= 220 && positionY <= 308)) {
    if(upsideDown) {
      if(positionX >= 42 && positionX <= 130) {
        activeSide = 3
      } else if(positionX >= 131 && positionX <= 223) {
        activeSide = 2
      } else if(positionX >= 224 && positionX <= 314) {
        activeSide = 5
      } else {
        activeSide = 4
      }
    } else {
      if(positionX >= 42 && positionX <= 130) {
        activeSide = 5
      } else if(positionX >= 131 && positionX <= 223) {
        activeSide = 4
      } else if(positionX >= 224 && positionX <= 314) {
        activeSide = 3
      } else {
        activeSide = 2
      }
    }
  } else {
    if(positionY >= 46 && positionY <= 130) {
      activeSide = 6
    }

    if(positionY >= 220 && positionY <= 308) {
      activeSide = 1
    }
  }

  return activeSide
}