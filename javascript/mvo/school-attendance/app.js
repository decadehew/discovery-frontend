const model = {
  init: function () {
    const days = 12
    const attendanceData = {}
    const student = [
      { name: 'Slappy the Frog' },
      { name: 'Lilly the Lizard' },
      { name: 'Paulrus the Walrus' },
      { name: 'Gregory the Goat' },
      { name: 'Adam the Anaconda' }
    ]
    if (!localStorage.attendance) {
      localStorage.attendance = JSON.stringify(attendanceData)
    }
  }
}

const octopus = {

}