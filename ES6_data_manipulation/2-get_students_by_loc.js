function getListStudentIds(getstudents, city) {
  if (!Array.isArray(getstudents)) {
    return [];
  }

  return getstudents.filter((getstudents) => getstudents.location === city);
}

export default getListStudentIds;
