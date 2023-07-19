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
  // STUB
  (currentEnemy.health -= player.attackPower)
  drawPlayer()
  drawCurrentEnemy()
  healPlayer(10)  ('you have no potions')
}

function drawPlayer() {
  document.getElementById('hero-health').innerText = '💖 ' + player.currentHealth
  // TODO finish the rest of the player attributes 
  document.getElementById('hero-gold').innerText = '🪙 ' + player.gold
  document.getElementById('hero-potions').innerText = '🧪 ' + player.potions
  document.getElementById('hero-attack').innerText = '⚔️ ' + player.attackPower
}

function drawCurrentEnemy() {
  //  STUB
  document.getElementById('enemy-health').innerText = '💖 ' + currentEnemy.health 
}

function enemyTurn() {
  // STUB

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