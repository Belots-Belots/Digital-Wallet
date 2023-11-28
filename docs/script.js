const TITLE = "Digital-Wallet";
console.log(`[${TITLE}] init`);

function calculate() {
  const personalMoney = document.getElementById("personal-money")
  console.log(`[${TITLE}] personalMoney`, personalMoney)
  console.log(`[${TITLE}] personalMoney.value`, personalMoney.value)

  const livingMoney = document.getElementById("living-money")
  console.log(`[${TITLE}] livingMoney`, livingMoney)
  console.log(`[${TITLE}] livingMoney.value`, livingMoney.value)

  const extraMoney = document.getElementById("extra-money")
  console.log(`[${TITLE}] extraMoney`, extraMoney)
  console.log(`[${TITLE}] extraMoney.value`, extraMoney.value)

  const total = document.getElementById("total")
  console.log(`[${TITLE}] total`, total)
  console.log(`[${TITLE}] total.value`, total.value)

  total.value = parseInt(personalMoney.value) + parseInt(livingMoney.value) + parseInt(extraMoney.value)

  if (total.classList.contains("flip")) {
    total.classList.remove("flip")
    total.classList.add("flip-alt")
  } else {
    total.classList.remove("flip-alt")
    total.classList.add("flip")
  }
}
