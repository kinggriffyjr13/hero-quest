const player = {
  currentHealth: 10,
  attackPower: 1,
  gold: 0,
  potions: 0,
}

function healPlayer() {
 if (player.potions > 0)
 {
  player.potions -= 1
  player.currentHealth += 10
  enemyTurn()
  drawPlayer()
  drawCurrentEnemy()
 }else{
  messageUser("you ran out of spicy juice")
 } 

}

function attackEnemy() {
  enemyTurn()

  currentEnemy.health -= player.attackPower

  if (currentEnemy.health <= 0
  ) {
    rewardPlayer()
    pickRandomEnemyFromCurrentStage()
  }
  drawPlayer()
  drawCurrentEnemy()
}

function drawPlayer() {
  document.getElementById('hero-health').innerText = '💖 ' + player.currentHealth
  // TODO finish the rest of the player attributes 
  document.getElementById('hero-gold').innerText = '🪙 ' + player.gold
  document.getElementById('hero-potions').innerText = '🧪 ' + player.potions
  document.getElementById('hero-attack').innerText = '⚔️ ' + player.attackPower
}

function drawCurrentEnemy() {
  document.getElementById('enemy-type').innerText = currentEnemy.type
  document.getElementById('enemy-health').innerText = '💖 ' + currentEnemy.health
}

function enemyTurn() {

  let enemyDamage = Math.floor(Math.random() * currentEnemy.maxAttackPower)
  player.currentHealth -= enemyDamage
  messageUser("you took" + enemyDamage + '💖 ')
  if (player.currentHealth <= 0) {
    showGameOver()
  }
}

function rewardPlayer() {
  player.gold += currentEnemy.gold
  if (player.gold >= 10000) {
    showVictory()
  }
}

function buyPotion() {
  if (player.gold >= 5 ){
    player.gold -= 5
    player.potions += 1
    messageUser('I will take your gold... 🪙 and give you a magic spicy juice')
  }else{
    messageUser('you dont have enough gold')
  }
  drawPlayer()
 
}

function increaseAttack() {
 if (player.gold >=10){
  player.gold -= 10
  player.attackPower += 5
  messageUser('hey kid give me more money and i will give you sterio- magic power boosters')
 }else{
  messageUser('what do you think we are running a charity GET OUT NOW!!')
   }
drawPlayer()
  }
function changeHero(){
  // [✅] get the hero container from the document
  // add the class hero-alt
  let heroContainer = document.getElementById("hero-container")
  heroContainer.classList.toggle("hero-alt")
}



drawPlayer()