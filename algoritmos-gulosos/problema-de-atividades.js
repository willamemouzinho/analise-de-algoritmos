// Função gulosa para o problema de seleção de atividades
function activitySelection(startTimes, endTimes) {
  const n = startTimes.length
  const activities = []

  // Monta um array de atividades com tempos de início e fim
  for (let i = 0; i < n; i++) {
    activities.push({ start: startTimes[i], end: endTimes[i] })
  }

  // Ordena as atividades pelo tempo de término
  activities.sort((a, b) => a.end - b.end)

  let selectedActivities = []
  let lastEndTime = 0

  // Seleciona as atividades de forma gulosa
  for (let i = 0; i < n; i++) {
    if (activities[i].start >= lastEndTime) {
      selectedActivities.push(activities[i])
      lastEndTime = activities[i].end
    }
  }

  return selectedActivities
}

// Exemplo de uso
const startTimes = [1, 3, 0, 5, 8, 5]
const endTimes = [2, 4, 6, 7, 9, 9]

const result = activitySelection(startTimes, endTimes)
console.log(
  'Atividades selecionadas:',
  result.map((activity) => `(${activity.start}, ${activity.end})`)
)
