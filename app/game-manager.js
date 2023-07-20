const player = {
  currentHealth: 10,
  attackPower: 1,
  gold: 0,
  potions: 0,
}

function healPlayer() {
  // STUB
}

function attackEnemy() {
  // enemyTurn()
  (currentEnemy.health -= player.attackPower)
  if(currentEnemy.health <= 0
  )  {rewardPlayer()
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
  
  let enemyDamage=Math.floor(Math.random() *currentEnemy.maxAttackPower)
(player.curentHealth -=enemyDamage)
messageUser("you took" + enemyDamage + '💖 ' )
if (player)
}

function rewardPlayer() {
  //
pickRandomEnemyFromCurrentStage()
}

function buyPotion() {
  // STUB
}

function increaseAttack() {
  // STUB
}

drawPlayer()