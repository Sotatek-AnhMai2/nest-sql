export const removeExcessPropertyWhenUpdate = (dto) => {
  for (const key in dto) {
    if (!dto.hasOwnProperty(key)) {
      delete dto[key];
    }
  }
  return dto;
};
