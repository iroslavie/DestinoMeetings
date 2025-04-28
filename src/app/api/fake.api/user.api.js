import { professionsObject as professions } from "./professions.api";

const qualities = {
  tedious: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "Душнила",
    color: "primary",
  },
  strange: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "Кринжовый",
    color: "secondary",
  },
  buller: { _id: "67rdca3eeb7f6fgeed4711012", name: "Гик", color: "success" },
  alcoholic: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "Микродозник",
    color: "danger",
  },
  handsome: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Красавчик",
    color: "info",
  },
  uncertain: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "Неуверенный",
    color: "dark",
  },
};

const users = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    name: "Миша Карпов",
    profession: professions.doctor,
    qualities: [qualities.tedious, qualities.uncertain, qualities.strange],
    completedMeetings: 36,
    rate: 2.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    name: "Слава Самойленко",
    profession: professions.doctor,
    qualities: [qualities.buller, qualities.handsome, qualities.alcoholic],
    completedMeetings: 15,
    rate: 2.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    name: "Алексей Морозов",
    profession: professions.doctor,
    qualities: [qualities.buller],
    completedMeetings: 247,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    name: "Кирилл Панкратов",
    profession: professions.waiter,
    qualities: [qualities.uncertain],
    completedMeetings: 148,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471819",
    name: "Даниил Сидоров",
    profession: professions.physics,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 37,
    rate: 4.6,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471820",
    name: "Иван Гаврилов",
    profession: professions.physics,
    qualities: [qualities.strange, qualities.uncertain],
    completedMeetings: 147,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471821",
    name: "Артур Пистолетов",
    profession: professions.engineer,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 72,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471822",
    name: "Владислав Крылов",
    profession: professions.engineer,
    qualities: [qualities.handsome, qualities.buller],
    completedMeetings: 72,
    rate: 5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471823",
    name: "Данил Абдулин",
    profession: professions.engineer,
    qualities: [qualities.handsome],
    completedMeetings: 17,
    rate: 5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed471824",
    name: "Илья Белов",
    profession: professions.cook,
    qualities: [qualities.handsome, qualities.buller],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed47181f",
    name: "Евгений Павлов",
    profession: professions.actor,
    qualities: [qualities.uncertain, qualities.strange],
    completedMeetings: 434,
    rate: 3.5,
    bookmark: false,
  },
  {
    _id: "67rdca3eeb7f6fgeed47181r",
    name: "Артём Захаров",
    profession: professions.actor,
    qualities: [qualities.handsome, qualities.alcoholic],
    completedMeetings: 434,
    rate: 5,
    bookmark: false,
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(users), 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(users.find(user => user._id === id)), 1000)
  })

export default {
  fetchAll,
  getById
};

