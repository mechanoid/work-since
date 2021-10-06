#!/usr/bin/env node
import dateFns from 'date-fns'
const { formatDistance, differenceInCalendarDays, differenceInCalendarMonths } = dateFns

if (process.argv.length !== 3) {
  console.log('Usage: work-since YYYY-MM-DD')
  process.exit(1)
}

const inputDate = process.argv[2]
const date = new Date(inputDate)
const today = Date.now()

const dayDifference = differenceInCalendarDays(date, today)
const monthDifference = differenceInCalendarMonths(date, today)
const yearsDifference = (monthDifference / 12).toFixed(1)
console.log(`The date is ${formatDistance(date, today, { addSuffix: true })}.

In more detail:
 Distance in days: ${dayDifference < 0 ? `${dayDifference * -1} days in the past` : `${dayDifference} days in the future`}
 Distance in months: ${monthDifference < 0 ? `${monthDifference * -1} months in the past` : `${monthDifference} months in the future`}
 Distance in years: ${monthDifference < 0 ? `${yearsDifference * -1} years in the past` : `${yearsDifference} years in the future`}
`)
