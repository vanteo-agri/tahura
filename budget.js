const budget = document.querySelector('.story-budget')
const areaInput = budget.querySelector('#budget-area')
const yieldInput = budget.querySelector('#budget-yield')
const priceInput = budget.querySelector('#budget-price')
const planInput = budget.querySelector('#budget-plan')
const results = budget.querySelectorAll('dd')
const status = budget.querySelector('#budget-status')
const format = new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 2 })

function updateBudget() {
  const inputs = [areaInput, yieldInput, priceInput]
  if (inputs.some(input => !input.value || !input.validity.valid)) {
    results.forEach(result => { result.textContent = '—' })
    status.textContent = 'Nhập diện tích từ 0,1 công và năng suất, giá bán từ 0 trở lên.'
    return
  }

  const area = areaInput.valueAsNumber
  const harvest = area * yieldInput.valueAsNumber * 1000
  const revenue = harvest * priceInput.valueAsNumber
  const trellis = planInput.value === 'new' ? 5700000 : 1900000
  const labor = planInput.value === 'family' ? 0 : 5500000
  const cost = area * (1680000 + trellis + 4900000 + labor)

  results[0].textContent = format.format(revenue / 1000000) + ' triệu đồng'
  results[1].textContent = format.format(cost / 1000000) + ' triệu đồng'
  results[2].textContent = format.format((revenue - cost) / 1000000) + ' triệu đồng'
  results[3].textContent = harvest ? format.format(Math.ceil(cost / harvest)) + ' đ/kg' : '—'
  status.textContent = 'Sản lượng dự kiến ' + format.format(harvest / 1000) + ' tấn.'
}

budget.querySelector('.budget-inputs').addEventListener('input', updateBudget)
updateBudget()
