export const Stage_Width = 12;
export const Stage_Height = 20;

export const createStage = () =>
  Array.from(Array(Stage_Height), () =>
    new Array(Stage_Width).fill([0, 'clear'])
  )