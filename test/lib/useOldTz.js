'use strict'
//use the old dst changes, from 2017, when we made the tests
const changeTz = s => {
  let timezones = s.timezones
  timezones['canada/eastern'].dst = '03/12:03->11/05:01'
  timezones['australia/canberra'].dst = '04/02:02->10/01:03'
  timezones['pacific/fiji'].dst = '01/15:02->11/05:03'
  s.timezones = timezones
  return s
}
module.exports = changeTz
