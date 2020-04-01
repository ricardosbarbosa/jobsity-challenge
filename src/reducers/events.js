import moment from 'moment'
const data = [
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  },
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  },
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  }, {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  },
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  },
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  },
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  },
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  },
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title"
  }
]

export default function events(state = data, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  