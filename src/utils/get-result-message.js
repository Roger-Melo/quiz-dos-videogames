const getResultMessage = ({ score = 0, maxScore = 50 }) => {
  const percentage = score / maxScore * 100
  return {
    0: `😥 Poxa, você fez ${score} pontos de ${maxScore} (${percentage}%)`,
    10: `😑 Você fez ${score} pontos de ${maxScore} (${percentage}%)`,
    20: `😐 Opa! Você fez ${score} pontos de ${maxScore} (${percentage}%)`,
    30: `😉 Legal! Você fez ${score} pontos de ${maxScore} (${percentage}%)`,
    40: `😎 Muito bom! Você fez ${score} pontos de ${maxScore} (${percentage}%)`,
    50: `🏆 Caramba! Você fez ${score} pontos de ${maxScore} (${percentage}%)`
  }[score]
}

export { getResultMessage }