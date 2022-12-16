export const ArrayOfAngles = (angle) => {
  const transformedAngle = angle * (Math.PI / 180);
  let arr = [];
  return (num) => {
    for (let i = 1; i < num; i++) {
      arr.push(transformedAngle * i);
    }
    return arr;
  };
};

export const ArrayOfPositions = (array) => {
  return (num) => {
    return array.map((angle, index) => {
      return {
        x: (num * index * 0.3 * Math.sin(angle)) / 2,
        y: (num * index * 0.3 * Math.cos(angle)) / 2,
      };
    });
  };
};
