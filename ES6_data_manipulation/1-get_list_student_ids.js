function getListStudentIds(getstudents) {
  if (!Array.isArray(getstudents)) {
    return [];
  }

  return getstudents.map((getstudents) => getstudents.id);
}

export default getListStudentIds;
