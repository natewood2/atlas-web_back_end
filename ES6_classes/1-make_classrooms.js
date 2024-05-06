import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
  const arrayOfClassroom = [];

  arrayOfClassroom.push(new ClassRoom(19));
  arrayOfClassroom.push(new ClassRoom(20));
  arrayOfClassroom.push(new ClassRoom(34));

  return arrayOfClassroom;
};

const arrayOfClassroom = initializeRooms();
