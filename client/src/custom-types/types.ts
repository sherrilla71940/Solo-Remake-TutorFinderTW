type Branch = {
  branch: string,
  hourlyRate: number
}

export type Subject = {
  subject: string,
  branches: Branch[]
}

export type Subjects = Subject[];

type Location = {
  city: string,
  districts: string[] | 'entire city'
};

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

enum Hour {
  twelveAM = '00:00',
  oneAM = '01:00',
  twoAM = '02:00',
  threeAM = '03:00',
  fourAM = '04:00',
  fiveAM = '05:00',
  sixAM = '06:00',
  sevenAM = '07:00',
  eightAM = '08:00',
  nineAM = '09:00',
  tenAM = '10:00',
  elevenAM = '11:00',
  twelvePM = '12:00',
  onePM = '13:00',
  twoPM = '14:00',
  threePM = '15:00',
  fourPM = '16:00',
  fivePM = '17:00',
  sixPM = '18:00',
  sevenPM = '19:00',
  eightPM = '20:00',
  ninePM = '21:00',
  tenPM = '22:00',
  elevenPM = '23:00'
}

type Timeslot = {
  start: Hour,
  end: Hour
}

type Availability = {
  day: Day
  timeslots: Timeslot[]
}

export default interface TutorInterface {
  __v?: number,
  _id?: string,
  name: string,
  profileUrl: string,
  age: number,
  gender: string,
  email: string,
  selfIntroduction?: string,
  remote: boolean,
  subjects: Subject[],
  inPerson: boolean,
  teachingLocations?: Location[]
  availability?: Availability[]
}