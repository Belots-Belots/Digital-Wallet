const TITLE = "Digital-Wallet";
console.log(`[${TITLE}] init`);

const personalMoney = document.getElementById("personal-money")
console.log(`[${TITLE}] personalMoney`, personalMoney)

const livingMoney = document.getElementById("living-money")
console.log(`[${TITLE}] livingMoney`, livingMoney)

const extraMoney = document.getElementById("extra-money")
console.log(`[${TITLE}] extraMoney`, extraMoney)

const total = document.getElementById("total")
console.log(`[${TITLE}] total`, total)

load()

function calculate() {
  console.log(`[${TITLE}#calculate] personalMoney.value`, personalMoney.value)

  console.log(`[${TITLE}#calculate] livingMoney.value`, livingMoney.value)

  console.log(`[${TITLE}#calculate] extraMoney.value`, extraMoney.value)

  console.log(`[${TITLE}#calculate] total.value`, total.value)

  total.value = parseInt(personalMoney.value) + parseInt(livingMoney.value) + parseInt(extraMoney.value)

  save()

  if (total.classList.contains("flip")) {
    total.classList.remove("flip")
    total.classList.add("flip-alt")
  } else {
    total.classList.remove("flip-alt")
    total.classList.add("flip")
  }
}

function load() {
  const savedPersonalMoney = localStorage.getItem("personalMoney")
  console.log(`[${TITLE}#load] savedPersonalMoney`, savedPersonalMoney)

  personalMoney.value = localStorage.getItem("personalMoney")

  livingMoney.value = localStorage.getItem("livingMoney")

  extraMoney.value = localStorage.getItem("extraMoney")

  calculate()
}

function save() {
  localStorage.setItem("personalMoney", personalMoney.value)

  localStorage.setItem("livingMoney", livingMoney.value)

  localStorage.setItem("extraMoney", extraMoney.value)
}