def alarm_clock(day, vacation):
  week_present = "7:00" if not vacation else "10:00"
  weekend_present = "10:00" if not vacation else "off"
  return week_present if day not in [6, 0] else weekend_present
