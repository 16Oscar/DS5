let candidates = [];

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const addCandidate = () => {
  const name = document.getElementById('candidate-name').value;
  const selectedColor = document.getElementById('candidate-color').value;
  const color = selectedColor === 'random' ? getRandomColor() : selectedColor;

  if (name) {
    candidates.push({ name, color, points: 0 });
    document.getElementById('candidate-name').value = '';
    renderCandidates();
    updateBarChart();
  } else {
    alert('Por favor, ingrese el nombre del candidato.');
  }
};

const deleteCandidate = (index) => {
  candidates.splice(index, 1);
  renderCandidates();
  updateBarChart();
};

const addPoints = (index) => {
  candidates[index].points++;
  renderCandidates();
  updateBarChart();
};

const renderCandidates = () => {
  const candidatesList = document.getElementById('candidates-list');
  candidatesList.innerHTML = '';

  candidates.forEach((candidate, index) => {
    const li = document.createElement('li');
    li.classList.add('candidate-item');

    li.innerHTML = `
      <span style="color: ${candidate.color}">${candidate.name}</span>
      <span>Puntos: ${candidate.points}</span>
      <button onclick="addPoints(${index})">Agregar Punto</button>
      <button onclick="deleteCandidate(${index})">Eliminar</button>
    `;

    candidatesList.appendChild(li);
  });
};

const updateBarChart = () => {
  const barChart = document.getElementById('bar-chart');
  barChart.innerHTML = '';

  const totalPoints = candidates.reduce((sum, candidate) => sum + candidate.points, 0);

  candidates.forEach((candidate) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    const percentage = totalPoints ? (candidate.points / totalPoints * 100).toFixed(1) : 0;
    bar.style.width = `${percentage}%`;
    bar.style.backgroundColor = candidate.color;
    bar.innerHTML = `${candidate.name} - ${percentage}% <span>(${candidate.points} puntos)</span>`;

    barChart.appendChild(bar);
  });
};

document.getElementById('add-candidate').addEventListener('click', addCandidate);
